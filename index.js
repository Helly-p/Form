function validateName(name_str){

    let str = name_str.value;
    let name = name_str.name;

    let pattern = /^[A-Za-z\s]+$/;
    if(str.length==0){
        document.getElementById(name+"_error").innerHTML = "*This field is required.";
    }
    else if(!str.match(pattern)){
        document.getElementById(name+"_error").innerHTML = "*Only characters allowed.";
    }
    else{
        document.getElementById(name+"_error").innerHTML = "";
    }
}
function validateOffice(office){
    let str = office.value;
    let name = office.name;
    let pattern = /^[A-Za-z0-9\s \.\-\/\\]+$/;
    if(str.length==0){
        document.getElementById(name+"_error").innerHTML = "*Address is required.";
    }
    else if(!str.match(pattern)){
        document.getElementById(name+"_error").innerHTML = "*Special characters are not allowed.";
    }
    else{
        document.getElementById(name+"_error").innerHTML = "";
    }
}
function validateMobile(mobile){

    let number = mobile.value;
    let name = mobile.name;
    let pattern = /^[6-9]{1}[0-9]{9}$/;
    if(number.length==0){
        document.getElementById(name+"_error").innerHTML = "*This field is required.";
    }
    else if(!number.match(pattern)){
        document.getElementById(name+"_error").innerHTML = "*Please enter valid format.";
    }
    else{
        document.getElementById(name+"_error").innerHTML = "";
    }
}
// function validateResidence(residence){
//     let pattern = /^[A-Za-z0-9\s]+$/;
//     if(residence.length==0){
//         document.getElementById("residence_error").innerHTML = "*Residence is required.";
//     }
//     else if(!residence.match(pattern)){
//         document.getElementById("residence_error").innerHTML = "*Special characters are not allowed.";
//     }
//     else{
//         document.getElementById("residence_error").innerHTML = "";
//     }
// }













const body = document.body;
const dataobj = {};

        // Gender Radio Selection
        function validateGender(gender) {
                dataobj.gender = gender;
            // console.log(dataobj.gender);
        }

        // All data
        function openData() {

            // let profile_pic = document.getElementById("profile_pic").value;
            // let pic = profile_pic.slice(12,profile_pic.length);
            // alert(pic);
            if(profile_pic.length==0)
            {
                document.getElementById("profile_pic_error").innerHTML = "Please upload a picture."
            }


            // const img = document.getElementById('img');
            // img.setAttribute('src',"./img/1.png");
            // alert("hello");
            dataobj.name = document.getElementById("name").value;
            dataobj.office = document.getElementById("office").value;
            dataobj.residence = document.getElementById("residence").value;

            var country_code = document.getElementById("country_code").value;
            var mobile = document.getElementById("mobile").value;
            dataobj.mobileno = country_code + " " + mobile;

            dataobj.telephone = document.getElementById("telephone").value;
            dataobj.profile_pic = document.getElementById("profile_pic").value;
            dataobj.emailid = document.getElementById("emailid").value;
            dataobj.aadharno = document.getElementById("aadharno").value;
            dataobj.gstin = document.getElementById("gstin").value;
            dataobj.vehicleno = document.getElementById("vehicleno").value;
            dataobj.dlno = document.getElementById("dlno").value;
            dataobj.bank_acc = document.getElementById("bank_acc").value;
            dataobj.accno = document.getElementById("accno").value;
            dataobj.debitcardno = document.getElementById("debitcardno").value;
            dataobj.creditcardno = document.getElementById("creditcardno").value;
            dataobj.passportno = document.getElementById("passportno").value;
            dataobj.pan_no = document.getElementById("pan_no").value;
            dataobj.bloodgrp = document.getElementById("bloodgrp").value;

            // Hobby Checkbox validation
            var hobby1 = document.getElementById("hobby1");
            var hobby2 = document.getElementById("hobby2");
            var hobby3 = document.getElementById("hobby3");
            var hobby = "";

            if (hobby1.checked == true) {
                var h1 = document.getElementById("hobby1").value;
                hobby = h1;
            }
            if (hobby2.checked == true) {
                var h2 = document.getElementById("hobby2").value;
                hobby += ", " + h2;
            }
            if (hobby3.checked == true) {
                var h3 = document.getElementById("hobby3").value;
                hobby += ", " + h3;
            }
            dataobj.hobby = hobby;

            dataobj.name2 = document.getElementById("name2").value;
            dataobj.mobile2 = document.getElementById("mobile2").value;
            dataobj.telephone2 = document.getElementById("telephone2").value;
            dataobj.relation = document.getElementById("relation").value;

            localStorage.clear();
            localStorage.setItem("data", JSON.stringify(dataobj));

            // document.getElementById("reset").click();
            // document.getElementById("Form").reset();
            // window.open("./info.html", "_self");
        }