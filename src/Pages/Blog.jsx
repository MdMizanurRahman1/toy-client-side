import React from 'react';

const Blog = () => {
    const gradientStyle = {
        background: 'linear-gradient(to right, #ff0000, #00ff00)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };
    return (
        <div className='my-20'>
            <div>
                <figure >
                    <img src="https://i.ibb.co/5vBcw6K/toy-bricks-table-with-word-blog-144627-47465.jpg" className="rounded-xl mx-auto w-4/5 h-52 " />
                </figure>
            </div>

            <div className="card w-4/5 bg-lime-50 shadow-xl mx-auto mb-10  ">
                <div className="card-body">
                    <h2 className="card-title" style={gradientStyle}>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p><span className='text-lime-700'>A. Access Token:</span> <br /> An access token is an identification that allows a client application to validate and grant access to certain server resources.
                        <br /><span className='text-lime-700'>How it works?</span> <br /> Its characteristic is a normal string that is validated by the server after only the client authenticates successfully by using their credentials. The access token is validated by the server to confirm that the client has the relevant rights to conduct the requested activity.</p>
                    <p>
                        <span className='text-lime-700'>B. Refresh Token:</span> <br /> A refresh token is an unique credential that allows the client to acquire a fresh access token without having to re-authenticate. <br /> <span className='text-lime-700'>How it works?</span> <br />When the access token comes to an end, the client can use the refresh token to request a new access token from the authentication server. <br /> <span className='text-lime-700'>Where should we store them on the client-side?</span> <br /> We can store them in cookies, browser storage, and token management libraries.
                    </p>
                </div>
            </div>
            <div className="card w-4/5 bg-lime-50 shadow-xl mx-auto mb-10">
                <div className="card-body">
                    <h2 className="card-title" style={gradientStyle}>2. Compare SQL and NoSQL databases?</h2>
                    <p>a. SQL databases are called relational databases, while NoSQL databases are distributed databases. <br />
                        b. SQL is vertically scaled; on the other hand, NoSQL is horizontally scaled. <br />
                        c. Table-based databases are SQL, while NoSQL is document- or graph-based. <br />
                        d. It is structured data, but NoSQL is not structured.</p>

                </div>
            </div>
            <div className="card w-4/5 bg-lime-50 shadow-xl mx-auto mb-10">
                <div className="card-body">
                    <h2 className="card-title" style={gradientStyle}>3. What is express js? What is Nest JS?</h2>
                    <p>A Node.js framework called NestJS is used to create server-side apps. It is built using JavaScript and TypeScript. On the other hand, for building websites and mobile apps, Express is a Node.js web-based application framework that offers a wide variety of features. It is an overlay that is added on top of Node to help maintain servers and routes.</p>

                </div>
            </div>
            <div className="card w-4/5 bg-lime-50 shadow-xl mx-auto mb-32">
                <div className="card-body">
                    <h2 className="card-title" style={gradientStyle}>4. What is MongoDB aggregate and how does it work?</h2>
                    <p>Aggregation is the process of going through many phases with a huge collection of documents to process them. A pipeline is made up of the several phases. Filtering, sorting, grouping, reshaping, and altering documents as they go through a pipeline are all possible. <br /> <span className='text-lime-700'>How does it works?</span> <br />Aggregation pipelines are groups of steps that, when used in combination with the query syntax of MongoDB, let us to get an aggregated result.
                    </p>

                </div>
            </div>

        </div>
    );
};

export default Blog;