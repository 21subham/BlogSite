import { useNavigate } from "react-router-dom";
import { Container, PostForm } from "../components";
import service from "../appwrite/config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditPost() {
  const [post, setPosts] = useState("");
  //to get slug value as url
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) setPosts(post);
        else {
          navigate("/");
        }
      });
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
