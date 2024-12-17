import React, { useState } from "react";
import Rating from "../components/Rating";

const reviewTitle = "Add a Review";
let ReviewList = [
  {
    imgUrl: "/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];

const Review = () => {
  const [reviewShow, setReviewShow] = useState(true);
  return (
    <>
      <ul
        className={`review-nav lab-ul ${
          reviewShow ? "RevActive" : "DescActive"
        }`}
      >
        <li className="desc" onClick={() => setReviewShow(!reviewShow)}>
          Description
        </li>
        <li className="rev" onClick={() => setReviewShow(!reviewShow)}>
          Reviews{" "}
        </li>
      </ul>

      {/* desc & reviwe content */}
      <div
        className={`review-content ${
          reviewShow ? "review-content-show" : "decription-show"
        }`}
      >
        <div className="review-showing">
          <ul className="content lab-ul">
            {ReviewList.map((val, i) => (
              <li key={i}>
                <div className="post-thumb">
                  <img src={val.imgUrl} alt="" />
                </div>
                <div className="post-content">
                  <div className="entry-meta">
                    <div className="posted-on">
                      <a href="#">{val.name}</a>
                      <p>{val.date}</p>
                    </div>
                  </div>
                  <div className="entry-content">
                    <p>{val.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* add review field */}
          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>{reviewTitle}</h5>
              </div>
              <form action="action" className="row">
                <div className="col-md-4 col-12">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name*"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email*"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <div className="rating">
                    <span className="me-2">Your Rating</span>
                    <Rating />
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <textarea
                    name="message"
                    id="message"
                    rows="8"
                    placeholder="Type Here Message"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="default-button">
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* description */}
        <div className="p-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            quisquam nesciunt harum, earum sequi veniam blanditiis labore,
            fugiat dicta corporis rem sunt, repellendus odio temporibus!
            Voluptate ipsum pariatur quis at. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Blanditiis obcaecati modi adipisci
            quos quaerat similique molestias alias quidem reiciendis, commodi
            dolorem asperiores illo fugit aperiam odit nihil cum incidunt.
            Voluptates.
          </p>
          <div className="post-item">
            <div className="post-thumb">
              <img src="/images/shop/01.jpg" alt="" />
            </div>
            <div className="post-content">
              <ul className="lab-ul">
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                </li>
              </ul>
            </div>
          </div>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            quisquam nesciunt harum, earum sequi veniam blanditiis labore,
            fugiat dicta corporis rem sunt, repellendus odio temporibus!
            Voluptate ipsum pariatur quis at. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Blanditiis obcaecati modi adipisci
            quos quaerat similique molestias alias quidem reiciendis, commodi
            dolorem asperiores illo fugit aperiam odit nihil cum incidunt.
            Voluptates.
          </p> */}
        </div>
      </div>
    </>
  );
};

export default Review;
