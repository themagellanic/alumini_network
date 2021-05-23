const from = '"Placement Team IIIT Lucknow" <placements@iiitl.ac.in>';
const baseUrl = 'http://placements.iiitl.ac.in';
const email_signature = '<br><br>With Regards.<br><br>Vishal Krishna Singh Assistant Professor<br>In-charge, Training & Placement<br>IIIT LUCKNOW<br>+91-0000000000';

exports.getEmailOpts = (data, mailType) => {

    switch (mailType) {

        case 'sendOTP':
            console.log(data);
            return {
                from : from,
                to:  data.college_email,
                subject: 'Login Request : Placement Cell, IIIT LUCKNOW',
                text: 'Hello '+ data.student_name + 'We have received a login request for your account.Please find the below OTP to proceed further With Regards,Vishal Krishna Singh Assistant Professor',
                html: 'Hello <strong>'+ data.student_name + '</strong>,<br><br>A sign in attempt to Placement Portal requires further verification to prevent unauthorized access to your account. To complete the sign in, enter the verification code on the Placement Portal.<br><br>Verification Code: ' + data.login_otp + email_signature
            }
            break;

        case 'forgotPassword':
            return {
                from: from,
                to: data.college_email,
                subject: 'Reset Password Request : Placement Cell, IIIT LUCKNOW',
                text: 'Hello '+ data.student_name + 'You requested for the reset password.Please find the below link Reset password With Regards, Vishal Krishna Singh Assistant Professor',
                html: 'Hello <strong>'+ data.student_name + '</strong>,<br><br>You requested for the reset password. Please find the below link<br><br><a href="' + baseUrl + "/forgotPassword/" + data.temporarytoken + '">Reset password</a>'+ email_signature
            }
            break;

        case 'passwordUpdated':
            return {
                from: from,
                to: data.college_email,
                subject: 'Password Updated : Placement Cell, IIIT LUCKNOW',
                text: 'Hello '+ data.student_name + 'Your password has been successfully updated.With Regards,Vishal Krishna Singh Assistant Professor ',
                html: 'Hello <strong>'+ data.student_name + '</strong>,<br><br>Your password has been successfully updated.'+ email_signature
            }
            break;

        case 'approveInterviewExperience':
            return {
                from: from,
                to: data.author_id + '@iiitl.ac.in',
                subject: 'Yay! We have published your article ' + data.title,
                text: 'Hello '+ data.author_name + 'Thanks for sharing your interview process and thoughts with us With Regards, Vishal Krishna Singh Assistant Professor',
                html: 'Hello <strong>'+ data.author_name + '</strong>,<br><br>Thanks for sharing your interview process and thoughts with us to help others. We have published your interview experience after a few modifications. We wish you luck for the future! Please find the link below -<br><br><a href="' + baseUrl + "/experience/" + data._id + '">' + data.title + ' </a>'+ email_signature
            };
            break;

        default:
            return {}
    }

}

exports.getSMSOpts = (data, smsType) => {

    switch (smsType) {

        case 'addCoordinator':
            return 'Hi '+ data.name.split(" ")[0] + ',' + '\n' + '\n' +
                'Welcome to Placement Cell. Login with College ID ' + data.college_email.toUpperCase().split("@")[0] + '-PTP' + ' and '+ data.alternate_contact_no + ' as password on portal.' +
                '\n' + '\n' + 'Thanks' + '\n' + 'PTP IIIT LUCKNOW'
            break;

        default:
            return {}
    }

}
