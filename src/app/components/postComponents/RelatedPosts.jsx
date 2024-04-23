import Link from "next/link";
import Image from "next/image";

const RelatedPosts = ({ posts }) => {
  console.log("this is post from related posts", posts);

  const username = posts[0]?.uid.name;
  return (
    <div
      style={{
        color: "#C7C7D1",
        display: "flex",
        flexWrap: "wrap",
        marginTop: "4rem",
        justifyContent: "center",
      }}
    >
      <h1 style={{ width: "100%", textAlign: "center", fontSize: "2rem" }}>
        All Posts by: {username}
      </h1>
      {posts && posts.map((post) => (
        <div
          key={post.id}
          className="card"
          style={{
            margin: "20px",
            padding: "20px",
            width: "300px",
            border: "2px solid #4A4A59",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease-in-out",
            background:
              "linear-gradient(153deg, rgba(3,4,57,1) 0%, rgba(32,33,96,1) 51%, rgba(3,4,57,1) 100%)",
          }}
        >
          <Link
            href={{
              pathname: `${post.id}`,
              query: { uidDetails: JSON.stringify(post.uid) },
            }}
            passHref
          >
            <div
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <div
                style={{ position: "relative", width: "100%", height: "200px" }}
              >
                <Image
                  src={post.img}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="card-image"
                />
              </div>
              <div className="card-body" style={{ marginTop: "10px" }}>
                <h5
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    margin: "10px 0",
                  }}
                >
                  {post.title}
                </h5>
                <p
                  className="card-text"
                  style={{ fontSize: "16px", margin: "10px 0" }}
                >
                  {post.desc.slice(0, 200) + "........"}
                </p>
                <p style={{ fontSize: "14px", margin: "10px 0" }}>
                  Category: {post.category}
                </p>
                <p style={{ fontSize: "14px", margin: "10px 0" }}>
                  Date: {new Date(post.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RelatedPosts;
