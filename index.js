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
function validateEmail(email){
    let pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9]+[.]+[a-zA-Z.]+$/;
    if(email.length==0){
        document.getElementById("email_error").innerHTML = "*This field is required.";
    }
    else if(!email.match(pattern)){
        document.getElementById("email_error").innerHTML = "*Please enter valid email format.";
    }
    else{
        document.getElementById("email_error").innerHTML = "";
    }
}
function validateAadhar(aadharno){
    let pattern = /^[0-9]{12}$/;
    if(aadharno.length==0){
        document.getElementById("aadhar_error").innerHTML = "*This field is required.";
    }
    else if(!aadharno.match(pattern)){
        document.getElementById("aadhar_error").innerHTML = "*Please enter valid aadharno format.";
    }
    else{
        document.getElementById("aadhar_error").innerHTML = "";
    }
}

function validateGST(gstinno){
    let pattern = /^[0-9]{2}[A-Z0-9]{10}[0-9]{1}[Z]{1}[0-9]{1}$/;
    if(gstinno.length==0){
        document.getElementById("gstin_error").innerHTML = "*This field is required.";
    }
    else if(!gstinno.match(pattern)){
        document.getElementById("gstin_error").innerHTML = "*Please enter valid GST No format.";
    }
    else{
        document.getElementById("gstin_error").innerHTML = "";
    }
}

function validateVehicleNo(vehicleno){
    let pattern = /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/;
    if(vehicleno.length==0){
        document.getElementById("vehicleno_error").innerHTML = "*This field is required.";
    }
    else if(!vehicleno.match(pattern)){
        document.getElementById("vehicleno_error").innerHTML = "*Please enter valid Vehicle No format.";
    }
    else{
        document.getElementById("vehicleno_error").innerHTML = "";
    }
}

function validateAllnumbers(data){
    let number = data.value;
    let name = data.name;
    let pattern = /^[0-9]+$/;
    if(number.length==0){
        document.getElementById(name+"_error").innerHTML = "*This field is required.";
    }
    else if(!number.match(pattern)){
        document.getElementById(name+"_error").innerHTML = "*Only numbers allowed.";
    }
    else{
        document.getElementById(name+"_error").innerHTML = "";
    }
}

function validateBloodgrp(bloodgrp){
    if(bloodgrp.length==0){
        document.getElementById("bloodgrp_error").innerHTML = "*This field is required.";
    }
    else{
        document.getElementById("bloodgrp_error").innerHTML = "";
    }
}

// function validateHobby(){
//     // alert(1);
//     var hobby = document.getElementsByName("hobby");
//     alert(hobby.length);
//     if(hobby.length < 2){
//         document.getElementById("hobby_error").innerHTML = "Please select atleast 2 hobby";
//     }
// }


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

            // console.log("Hello");

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

            dataobj.country_code = document.getElementById("country_code").value;
            dataobj.mobile = document.getElementById("mobile").value;
            // dataobj.mobileno = country_code + " " + mobile;

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
            dataobj.dob = document.getElementById("dob").value;

            var hobby_tosend = [];
            hobby = document.getElementsByName("hobby");
            // let count = 0;
            hobby.forEach(hobby_name => {
                if (hobby_name.checked == true) {
                    // count++;
                    hobby_tosend.push(hobby_name.value);
                }
            });
            // alert("Hello");
            dataobj.hobby = hobby_tosend;

            dataobj.name2 = document.getElementById("name2").value;
            dataobj.mobile2 = document.getElementById("mobile2").value;
            dataobj.telephone2 = document.getElementById("telephone2").value;
            dataobj.relation = document.getElementById("relation").value;

            // alert("Hello");
            localStorage.clear();
            localStorage.setItem("data", JSON.stringify(dataobj));

            // document.getElementById("reset").click();
            // document.getElementById("Form").reset();
            // window.open("./info.html", "_self");
        }