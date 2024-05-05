import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { client } from "../lib/createClient";
import { Link, useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const AllPosts = () => {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 3;
  const { page } = useParams();
  const location = useLocation();
  const currentPage = parseInt(page) || 1;

  useEffect(() => {
    const fetchPosts = async () => {
      const entries = await client.getEntries({
        content_type: "fiapBlogPost",
        order: "-sys.createdAt",
        skip: (currentPage - 1) * postsPerPage,
        limit: postsPerPage,
      });
      setPosts(entries.items);
      setTotalPages(Math.ceil(entries.total / postsPerPage));
    };

    fetchPosts();
  }, [currentPage, postsPerPage, location]);

  useEffect(() => {
    const fetchCategories = async () => {
      const entries = await client.getEntries({
        content_type: "fiapBlogCategory",
      });
      setCategories(entries.items);
    };

    fetchCategories();
  }, []);

  return (
    <>
      <Helmet>
        <title>Todos os Posts</title>
      </Helmet>
      <Layout>
        <div className="container">
          <div className="row">
            <main className="col-md-8">
              <h1 className="my-3">Todos os Posts</h1>

              {posts.map((post) => (
                <div className="card mb-3" key={post.sys.id}>
                  <div className="card-body">
                    {post.fields.postImage &&
                      post.fields.postImage.fields.file && (
                        <Link to={`/post/${post.fields.postSlug}`}>
                            <img className="img-fluid" src={post.fields.postImage.fields.file.url} alt={post.fields.postTitle} />
                        </Link>
                      )}
                    <h5 className="my-3 card-title">{post.fields.postTitle}</h5>
                    <p className="card-text">{post.fields.postDescription}</p>
                    <Link
                      to={`/post/${post.fields.postSlug}`}
                      className="card-link"
                    >
                      Ver post
                    </Link>
                  </div>
                </div>
              ))}

              <nav>
                <ul className="pagination">
                  <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <Link
                      className="page-link"
                      to={`/todos-os-posts/page/${currentPage - 1}`}
                      aria-disabled={currentPage === 1}
                    >
                      Anterior
                    </Link>
                  </li>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <li
                      key={index}
                      className={`page-item ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                    >
                      <Link
                        className="page-link"
                        to={`/todos-os-posts/page/${index + 1}`}
                      >
                        {index + 1}
                      </Link>
                    </li>
                  ))}
                  <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                    <Link
                      className="page-link"
                      to={`/todos-os-posts/page/${currentPage + 1}`}
                      aria-disabled={currentPage === totalPages}
                    >
                      Próximo
                    </Link>
                  </li>
                </ul>
              </nav>
            </main>

            <aside className="col-md-4">
              <h2 className="my-3">Categorias</h2>
              <ul>
                {categories.map((category) => (
                  <li key={category.sys.id}>{category.fields.categoryTitle}</li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </Layout>
    </>
  );
};
