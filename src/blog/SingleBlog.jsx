import React, { useState } from "react";
import bloglist from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import PopularPost from "../shop/PopularPost";
import Tags from "../shop/Tags";

const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];

const SingleBlog = () => {
  const [blog, setBlog] = useState(bloglist);
  const { id } = useParams();
  //   console.log(id);
  const result = blog.filter((b) => b.id === Number(id));
  console.log(result[0]);
  return (
    <div>
      <PageHeader title={"Single Blog Page"} curPage={"Blog / Blog Details"} />
      <div className="container">
        <div className="blog-section blog-single padding-tb section-bg">
          <div className="row justify-content-center">
            {/* left side */}
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>
                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>{item.desc}</p>
                                <blockquote>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nostrum, quibusdam
                                    reiciendis, aliquid quidem totam fuga
                                    explicabo officia perferendis consectetur
                                    citecorporis? Facilis.
                                  </p>
                                  <cite>
                                    <a href="#">...Melissa Hunter</a>
                                  </cite>
                                </blockquote>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Nam libero nulla beatae,
                                  aliquam iure saepe voluptate non, facere
                                  provident vitae, possimus debitis ab vel id in
                                  officiis veritatis dignissimos. Voluptas.
                                </p>

                                <img
                                  src="/images/blog/single/01.jpg"
                                  alt=""
                                />

                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Nam libero nulla beatae,
                                  aliquam iure saepe voluptate non, facere
                                  provident vitae, possimus debitis ab vel id in
                                  officiis veritatis dignissimos. Voluptas.
                                </p>

                                <div className="video-thumb">
                                  <img
                                    src="/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://youtu.be/oF5j342uTYg?si=URwmCiYSv3gCstui"
                                    className="video-button popup" target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Voluptate in, amet impedit
                                  reprehenderit quae minima autem aliquam itaque
                                  vel a doloremque sequi tenetur tempore,
                                  recusandae non quasi temporibus? Blanditiis,
                                  esse.
                                </p>
                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a href="#" className={val.className}>
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="navigations-part">
                      <div className="left">
                        <a href="#" className="prev">
                          <i className="icofont-double-left"></i> Previous Blog
                        </a>
                        <a href="#" className="title">
                          Evisculate Prallel Processes via Technica Sound Models
                          Authorative
                        </a>
                      </div>
                      <div className="right">
                        <a href="#" className="prev">
                          <i className="icofont-double-right"></i> Next Blog
                        </a>
                        <a href="#" className="title">
                          Evisculate Prallel Processes via Technica Sound Models
                          Authorative
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* right side */}
            <div className="col-lg-4 col-12">
                <aside>
                    <Tags/>
                    <PopularPost/>
                </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
