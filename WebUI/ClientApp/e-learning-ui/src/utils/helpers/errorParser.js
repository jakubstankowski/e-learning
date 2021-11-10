export default {
    parse(error) {
        const status = error.response.status;

        switch (status) {
            case 404: {
                return 'Resource not found :(';
            }
            case 500: {
                return 'Houston we have a problem, please try again later';
            }
        }

    }
}
