/*
Grade Classifier: Write a function that takes a student's score as input and
returns a grade (A, B, C, D, or F) based on the following grading scale:
A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59
*/


function classifyGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A";
    } else if (score >= 80 && score <= 89) {
        return "B";
    } else if (score >= 70 && score <= 79) {
        return "C";
    } else if (score >= 60 && score <= 69) {
        return "D";
    } else {
        return "F";
    }
}


/*
Time Converter: Write a function that takes a time in 24-hour format (e.g., "13:45")
as input and returns the time in 12-hour format with AM/PM (e.g., "1:45 PM").
*/


function convertTime(time24) {
    const [hours, minutes] = time24.split(":");
    const hour = parseInt(hours);
    const minute = parseInt(minutes);
    const period = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 === 0 ? 12 : hour % 12;
    return `${hour12}:${minutes} ${period}`;
}

/*
Password Strength Checker: Write a function that takes a password as input and returns
a message indicating its strength:
"Weak" if the password has fewer than 8 characters,
"Medium" if it has 8 to 12 characters,
"Strong" if it has more than 12 characters and contains at least one digit, one lowercase
letter, and one uppercase letter.
*/



function checkPasswordStrength(password) {
    if (password.length < 8) {
        return "Weak";
    } else if (password.length >= 8 && password.length <= 12) {
        return "Medium";
    } else if (password.length > 12 && /\d/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password)) {
        return "Strong";
    }
}

// Weekday Name Converter

/*
Write a function that takes weekday's number (from 1 to 7) as an input and returns the
appropriate weekday name
*/


function getWeekdayName(dayNumber) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekdays[dayNumber - 1];
}

/*
Taxi Fare Calculator: Write a function that takes the distance traveled (in kilometers)
and the waiting time (in minutes) as input and calculates the taxi fare according to the
following rules:
Base fare: $5
Additional fee: $0.50 per kilometer
Additional fee for every 3 minutes waiting time: $1
*/
function calculateTaxiFare(distance, waitingTime) {
    const baseFare = 5;
    const additionalFeePerKm = 0.50;
    const additionalFeePer3Minutes = 1;

    const distanceFee = distance * additionalFeePerKm;
    const waitingFee = Math.ceil(waitingTime / 3) * additionalFeePer3Minutes;

    return baseFare + distanceFee + waitingFee;
}


