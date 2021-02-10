const form = document.forms[0];
const submitBtn = form[4];
const result = document.querySelector(".Result");
//Collect Contact Form Contents

submitBtn.addEventListener("click", async (event) => {
  event.preventDefault(); //prevent the button from submitting automatically
  //Store all the input details in an object
  const user = {
    name: form[0].value,
    phone: form[1].value,
    email: form[2].value,
    message: form[3].value,
  };
  //Store the object needed for fetching api
  const options = {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (user.name != "" && user.email != "" && user.message != "") {
    await fetch(
      "https://teachers-support-teachers.herokuapp.com/email",
      options
    )
      .then((res) => {
        if (res.ok) {
          return Promise.resolve("Message Sent");
        } else {
          return Promise.reject("Error Occured");
        }
      })
      .then((data) => {
        result.innerText = data;
      })
      .catch((err) => {
        result.innerText = "Internal Server Error";
      });
    //Clear all inputs field on the user page
    for (let i = 0; i < form.length; i++) {
      form[i].value = "";
    }
    //Clear the result message after a specified period
    setTimeout(function () {
      result.style.display = "none";
    }, 5000);
  }
});
