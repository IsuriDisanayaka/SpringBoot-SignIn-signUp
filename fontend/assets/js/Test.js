

let cusIdRegEx = /^(E)[0-9]{1,3}$/;
let cusNameRegEx = /^[A-z ]{1,}$/
let cusAddressRegEx = /^([a-zA-z0-9/\\''(),-\s]{2,255})$/;
let custEmailRegEx = /^([a-zA-Z0-9_\-\.]+)*(\+[a-z0-9-]+)?@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
let cusSalaryRegEx = /[0-9]{1,}$/;
let custpassRegEx =/^[A-z]{5}$/
$("#inputID").on('keyup',function (event) {
    if(event.key=="Enter"){
        $("#inputName").focus();
    }
    let inputInput=$("#inputID").val();
    if(cusIdRegEx.test(inputInput)){
        $("#inputID").css('border','2px solid green');
        $("#lbluserid").text("");
    }else{
        $("#inputID").css('border','2px solid red',);
        $("#lbluserid").text('Your Input Data Format is Wrong.(Ex:E001) ').css('color','red',);
    }
});
$("#inputName").on('keyup',function (event) {
    if(event.key=="Enter"){
        $("#inputEmail").focus();
    }
    let inputName=$("#inputName").val();
    if(cusNameRegEx.test(inputName)){
        $("#inputName").css('border','2px solid green');
        $("#lblusername").text("");
    }else{
        $("#inputName").css('border','2px solid red',);
        $("#lblusername").text('Your Input Data Format is Wrong (Ex:Nimal Perera ').css('color','red',);
    }
});
$("#inputAddress").on('keyup',function (event) {
    if(event.key=="Enter"){
        $("#inputAddress").focus();
    }
    let inputAddress=$("#inputAddress").val();
    if(cusAddressRegEx.test(inputAddress)){
        $("#inputAddress").css('border','2px solid green');
        $("#lbluseraddress").text("");
    }else{
        $("#inputAddress").css('border','2px solid red',);
        $("#lbluseraddress").text('Your Input Data Format is Wrong (Ex:Batapola road,Ethkandura ').css('color',' red');
    }
});
$("#inputEmail").on('keyup',function (event) {
    if(event.key=="Enter"){
        $("#inputEmail").focus();
    }
    let inputEmail=$("#inputEmail").val();
    if(custEmailRegEx.test(inputEmail)){
        $("#inputEmail").css('border','2px solid green');
        $("#lblemail").text("");
    }else{
        $("#inputEmail").css('border','2px solid red',);
        $("#lblemail").text('Your Input Data Format is Wrong (Ex:nimal1@gmail.com').css('color',' red');
    }
});
$("#inputSalary").on('keyup',function (event) {
    if(event.key=="Enter"){
        $("#inputSalary").focus();
    }
    let inputSalary=$("#inputSalary").val();
    if(cusSalaryRegEx.test(inputSalary)){
        $("#inputSalary").css('border','2px solid green');
        $("#lblusersalary").text("");
    }else{
        $("inputSalary").css('border','2px solid red',);
        $("#lblusersalary").text('Your Input Data Format is Wrong (Ex:30000.00').css('color',' red');
    }
});
$("#inputPassword").on('keyup',function (event) {
    if(event.key=="Enter"){
        $("#inputPassword").focus();
    }
    let inputpassword=$("#inputPassword").val();
    if(custpassRegEx.test(inputpassword)){
        $("#inputPassword").css('border','2px solid green');
        $("#lbluserpassword").text("");
    }else{
        $("inputPassword").css('border','2px solid red',);
        $("#lbluserpassword").text('Your Input Data Format is Wrong.Only five letters you can use . (Ex:dodne').css('color',' red');
    }
});