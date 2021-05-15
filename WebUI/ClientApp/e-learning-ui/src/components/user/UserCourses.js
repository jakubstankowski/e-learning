import React, {useContext, useEffect} from "react";
import UserContext from '../../context/user/userContext';
import AuthContext from "../../context/auth/authContext";

export default function UserCourses() {
    const userContext = useContext(UserContext);
    const {getUserCourses} = userContext;

    const authContext = useContext(AuthContext);
    const {isAuthenticated, userId} = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            getUserCourses(userId);
        }

    }, [isAuthenticated]);

    return (
        <div>
            user courses
        </div>
    )

}
