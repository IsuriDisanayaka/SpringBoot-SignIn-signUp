$("#btncreate").click(function () {



    if (cusIdRegEx.test ($("#inputID").val())&& $("#inputID").val() != null) {
        $("#inputID").css('border', '1px solid green');
        $("#lbluserid").text("");

        if (cusNameRegEx.test($("#inputName").val()) && $("#inputName").val() != null) {
            $("#inputName").css('border', '1px solid green');
            $("#lblusername").text("");
            if (custEmailRegEx.test($("#inputEmail").val()) && $("#inputEmail").val() != null) {
                $("#inputEmail").css('border', '1px solid green');
                $("#lblemail").text("");
                if (cusAddressRegEx.test($("#inputAddress").val()) && $("#inputAddress").val() != null) {
                    $("#inputAddress").css('border', '1px solid green');
                    $("#lbluseraddress").text("");
                    if (cusSalaryRegEx.test($("#inputSalary").val()) && $("#inputSalary").val() != null) {
                        $("#inputSalary").css('border', '1px solid green');
                        $("#lblusersalary").text("");
                        if (custpassRegEx.test($("#inputPassword").val()) && $("#inputPassword").val() != null) {
                            $("#inputPassword").css('border', '1px solid green');
                            $("#lbluserpassword").text("");

                            let ID = $("#inputID").val();
                            let Name = $("#inputName").val();
                            let Email = $("#inputEmail").val();
                            let Address = $("#inputAddress").val();
                            let Salary = $("#inputSalary").val();
                            let Password = $("#inputPassword").val();
                            $.ajax({
                                method: "POST",
                                url: "http://localhost:8082/api/v1/user/save",
                                contentType: 'application/json',
                                async: true,
                                data: JSON.stringify({
                                    id: ID,
                                    name: Name,
                                    email: Email,
                                    address: Address,
                                    salary: Salary,
                                    password: Password,
                                }),
                                success: function (data) {
                                    console.log(data);
                                    clearRegFeild();

                                }
                            })

                        } else {
                            $("#inputPassword").css('border', '1px solid red',);
                            $("#lbluserpassword").text('Your Input Data Format is Wrong (ex:uytre)').css('color', ' red');
                        }
                    } else {
                        $("#inputSalary").css('border', '1px solid red',);
                        $("#lblusersalary").text('Your Input Data Format is Wrong (ex:3000.00)').css('color', ' red');
                    }
                } else {
                    $("#inputAddress").css('border', '1px solid red',);
                    $("#lbluseraddress").text('Your Input Data Format is Wrong (ex:No/2 Galle road,Colombo)').css('color', ' red');
                }
            } else {
                $("#inputEmail").css('border', '1px solid red',);
                $("#lblemail").text('Your Input Data Format is Wrong (ex:Kamal1@gmail.com)').css('color', ' red');
            }
        } else {
            $("#inputName").css('border', '1px solid red',);
            $("#lblusername").text('Your Input Data Format is Wrong (ex:Kamal Perera)').css('color', ' red');
        }
    } else {
        $("#inputID").css('border', '1px solid red',);
        $("#lbluserid").text('Your Input Data Format is Wrong (ex:E001)').css('color', ' red');
    }




});



$("#login").click(function () {


    if (custEmailRegEx.test($("#uname").val()) && $("#uname").val() != null) {
        $("#uname").css('border', '1px solid green');
        $("#lblemail").text("");
        let email = $("#uname").val()
        let Password = $("#password").val()
        $.ajax({
            method: "POST",
            url: `http://localhost:8082/api/v1/user/check`,
            contentType: 'application/json',
            // async: true,
            data: JSON.stringify({
                id:"",
                name:"",
                email:email,
                address:"",
                salary:0.00,
                password:Password,
            }),
            success: function (resp) {
                let response = resp.data
                console.log(response);
                if (response==1) {

                    alert("Success");
                } else {
                    alert("password doesn't match");
                }
            }
        })
    } else {
        $("#uname").css('border', '2px solid red',);
        alert("Enter Valid Mail")
       // $("#lbluname").text('Your Input Data Format is Wrong .Enter Valid Email').css('color', ' red');
    }

});




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
        $("#inputID").css('border','2px solid red');
        $("#lbluserid").text('Your Input Data Format is Wrong.(Ex:E001) ').css('color','red',);
        $("#btncreate").css('cursor','disable');
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

function clearRegFeild() {
    $("#inputID").val("");
    $("#inputName").val("");
    $("#inputEmail").val("");
    $("#inputAddress").val("");
    $("#inputSalary").val("");
    $("#inputPassword").val("");

}










