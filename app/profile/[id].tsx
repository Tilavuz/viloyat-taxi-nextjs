import { useRouter } from 'next/router';

const PostPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Post Page</h1>
            <p>Post ID: {id}</p>
        </div>
    );
};

export default PostPage;
