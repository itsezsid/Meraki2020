function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken');
$('#signup-form').submit((event) => {
    event.preventDefault()
    name1 = $("#inputName").val()
    email1 = $("#inputEmail").val()
    subject1 = $("#inputSubject").val()
    message1 = $("#inputMessage").val()
    $.ajax({
        url: '/submail',
        type: "post",
        data: {
            name : name1,
            email : email1,
            subject : subject1,
            message : message1,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
        },
        headers: {'X-CSRFtoken': csrftoken},
        cache: false,
        success: function () {
            alert("Congratulations! Your message has been sent successfully.")
            document.querySelector("#inputEmail").value = ""
            document.querySelector("#inputName").value = ""
            document.querySelector("#inputSubject").value = ""
            document.querySelector("#inputMessage").value = ""
        },
    });
})