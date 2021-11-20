import React, {useContext, useEffect} from "react";
import HomeBillboard from "./HomeBillboard";
import CoursesContext from "../../context/courses/coursesContext";
import BasketContext from "../../context/basket/basketContext";
import Courses from "../../components/courses/Courses";

const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://i.imgur.com/0NPaOc6.png',
    imgText: 'main image description',
    linkText: 'Continue reading…',
};

export default function Home() {
    const coursesContext = useContext(CoursesContext);
    const {getHomeCourses} = coursesContext;

    const basketContext = useContext(BasketContext);
    const {getBasket} = basketContext;

    useEffect(() => {
        const basketId = localStorage.getItem('basket_id');

        if (basketId) {
            getBasket(basketId);
        }

        getHomeCourses();

        // eslint-disable-next-line
    }, []);

    return (
        <section>
            <HomeBillboard post={mainFeaturedPost}/>
            <Courses
                showAddToCartButton="true"
            />
        </section>
    )
}
