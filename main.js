function clock() {

    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    setInterval(function () {
        var date = new Date();
        var meridian;
        var greetings = document.getElementById('greetings');
        var currentTime = document.getElementById('clock');
        var currentDate = document.getElementById('currentDate');
        //Greetings
        if (date.getHours() > 5 && date.getHours() < 12) {
            greeting = "Good Morning";
        } else if (date.getHours() >= 12 && date.getHours() < 16) {
            greeting = "Good Afternoon";
        } else {
            greeting = "Good Night";
        }
        greetings.innerHTML = greeting;

        //Current Time
        if (date.getHours() >= 12 && date.getHours() < 24) {
            meridian = 'PM'
        } else {
            meridian = 'AM';
        }
        currentTime.innerHTML = updateTime(date.getHours() % 12) + ":" + updateTime(date.getMinutes()) + ":" + updateTime(date.getSeconds()) + "  " + meridian;

        // Current Date
        currentDate.innerHTML = updateTime(date.getDate()) + " " + months[date.getMonth()] + " " + date.getFullYear();



        function updateTime(value) {
            if (value < 10) {
                return "0" + value;
            } else {
                return value;
            }
        }
    }, 1000);

}

clock();