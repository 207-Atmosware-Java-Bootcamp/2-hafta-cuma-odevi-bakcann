//2.hafta 5.gün ödev
main();

function main(){
    //password isteniyor
    var password1=String(prompt("Password giriniz:En az 3 karakter"));
    var password2=String(prompt("Girilen Passwordu doğrulayınız"));
    passwordControl(password1,password2,passwordCharacterControl);
    
}

function passwordCharacterControl(password1,password2){
    //password minimum karakter kontrolü
    if(password1.length>=3 && password2.length>=3){
       
        return true;
    }
        //document.write("3karakterden fazla password giriniz");
        return false;
    
}

function passwordControl(password1,password2){
    //girilen 2 password eşleşiyormu
    var result = passwordCharacterControl(password1, password2);
    if(result==true){

    if(password1==password2){
        document.write("Sisteme kayıt gerçekleştirildi");
    }else{
        document.write("Girilen Password'ler birbirini doğrulamamaktadır.")
    }
}else{document.write("3 karakterden fazla password giriniz.")}
}



   
