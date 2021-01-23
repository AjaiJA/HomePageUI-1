function placeOrder()
{
    var firstname=document.getElementById('first').value;
    var lastname=document.getElementById('last').value;
    var dob=document.getElementById('dob').value;
    var email=document.getElementById('mail').value;
    var url=document.getElementById('url').value;
    var telephone=document.getElementById('telephone').value;
    var shoe=document.getElementById('shoe').value;
    var address=document.getElementById('address').value;
    var postcode=document.getElementById('post').value;
    var country=document.getElementById('country').value;
    var name=document.getElementById('name').value;
    var cardno=document.getElementById('cardno').value;
    var secure=document.getElementById('secur').value;
    var expiry=document.getElementById('expiry').value;
    if(firstname=="" || lastname=="" || dob=="" || email=="" || url=="" || address=="" || postcode=="" || cardno=="" || secure=="" ||expiry=="" || shoe=="" || country=="")
    {
        alert("Fields are empty");
    }
    else
    {
        if(name.match(/^[A-Za-z ]+$/) && firstname.match(/^[A-Za-z ]+$/) && lastname.match(/^[A-Za-z ]+$/))
        {
            if(telephone.match(/^\d{10}$/))
            {
                if(email.match(/^[A-Za-z0-9_\.\-]+\@(([A-Za-z0-9\-])+\.)+([A-Za-z0-9]{2,4})+$/))
                {
                    if(postcode.match(/^[1-9][0-9]{5}$/))
                    {
                        if(country.match(/^[A-Za-z]$/))
                        {
                            alert("Hi " + firstname + " your order is placed");
                        }
                        else
                        {
                            alert("Invalid Country Name");
                        }
                    }
                    else
                    {
                        alert("Invalid Pincode");
                    }
                }
                else
                {
                    alert("Invalid Email");
                }
            }
            else
            {
                alert("Invalid telephone");
            }
        }
        else
        {
            alert("Invalid Name or First Name or Last Name");
        }
    }
}