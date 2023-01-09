import swal from 'sweetalert';

const successAlert = (text) => {
    swal({
        title: "Success!",
        text: text,
        icon: "success",
        button: "Close",
    })
}

const failedAlert = (text) => {
    swal({
        title: "Failed!",
        text: text,
        icon: "error",
        button: "Close",
    })
}

const noChangeAlert = () => {
    swal({
        icon: 'info',
        title: "Nothing Changed!"
    });
}
const alert = (text) => {
    swal({
        text: text,
        icon: 'info',
    });
}

export { successAlert, failedAlert, noChangeAlert, alert };

