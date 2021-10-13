import React, {useContext, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import HomeBillboard from "./HomeBillboard";
import CourseItem from "../../components/courses/CourseItem";
import CoursesContext from "../../context/courses/coursesContext";
import BasketContext from "../../context/basket/basketContext";

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
    const {getHomeCourses, courses} = coursesContext;

    const basketContext = useContext(BasketContext);
    const {getBasket} = basketContext;

    useEffect(() => {
        const basketId = localStorage.getItem('basket_id');

        if (basketId) {
            getBasket(basketId);
        }

        getHomeCourses();
    }, []);

    return (
        <section>
            <HomeBillboard post={mainFeaturedPost}/>
            <Grid container spacing={4}>
                {
                    courses.map((course) =>
                        <CourseItem
                            showAddToCartButton="true"
                            course={course}
                            key={course.id}/>
                    )
                }
            </Grid>
        </section>
    )
}
