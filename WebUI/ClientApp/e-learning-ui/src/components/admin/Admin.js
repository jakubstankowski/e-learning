import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


class Admin extends React.Component {

    render() {
        return (
            <article style={{padding: 16}}>
                <Typography variant="h5" component="h2">
                    Admin mode
                </Typography>
               {/* <Link to="/admin/course/create" style={{textDecoration: 'none'}}>
                    <Button variant="contained" color="primary">
                        Create new course
                    </Button>
                </Link>
                <Link to="/admin/lesson/create" style={{textDecoration: 'none'}}>
                    <Button variant="contained" color="primary">
                        Create new lesson
                    </Button>
                </Link>*/}
            </article>
        )
    }
}


export default Admin;
