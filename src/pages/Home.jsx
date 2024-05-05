import { useEffect, useState } from "react"
import { Layout } from "../components/Layout"
import { client } from "../lib/createClient";
import { Link } from "react-router-dom";

import { Helmet } from 'react-helmet-async';

export const Home = () => {
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        client
            .getEntries({
                content_type: 'fiapBlogPost',
                limit: 3,
                order: "-sys.createdAt"
            })
            .then(function (entries) {
                console.log('posts', entries.items);
                setPosts(entries.items);
            });

        client
            .getEntries({
                content_type: 'fiapBlogCategory',
            })
            .then(function (entries) {
                console.log('categorias', entries.items);
                setCategories(entries.items);
            });
    }, []);

    return (
        <>
            <Helmet>
                <title>HOME - FIAP BLOG</title>
            </Helmet>
            <Layout>
                <div className="container">
                    <div className="row">
                        <main className="col-md-8">
                            <h1 className="my-3">Últimos posts</h1>
                            
                            {posts.map(post => (
                                <div className="card mb-3" key={post.sys.id}>
                                    <div className="card-body">
                                        {post.fields.postImage && post.fields.postImage.fields.file && (
                                            <Link to={`/post/${post.fields.postSlug}`}>
                                                <img className="img-fluid" src={post.fields.postImage.fields.file.url} alt={post.fields.postTitle} />
                                            </Link>
                                        )}
                                        <h5 className="card-title my-3">{post.fields.postTitle}</h5>
                                        <p className="card-text">{post.fields.postDescription}</p>
                                        <Link to={`/post/${post.fields.postSlug}`} className="card-link">
                                            Ver post
                                        </Link>
                                    </div>
                                </div>
                            ))}
                            
                            <Link to="/todos-os-posts/page/2" className='btn btn-primary my-3'>Ver todos os posts</Link>
                        </main>
                    
                        <aside className="col-md-4">
                            <h2 className="my-3">Categorias</h2>
                            <ul>
                                {categories.map(category => (
                                    <li key={category.sys.id}>
                                        {category.fields.categoryTitle}
                                    </li>
                                ))}
                            </ul>
                        </aside>
                    </div>
                </div>
            </Layout>
        </>
    )
}