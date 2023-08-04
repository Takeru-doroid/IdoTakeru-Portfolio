document.addEventListener("click", ({target}) => {
  if (target.matches("#toggle-password-icon")) {
    const userPass = document.getElementById("user_password");
    const flg = userPass.type === "password";
    userPass.type = flg? "text" : "password";
    target.classList.toggle("fa-eye", flg);
    target.classList.toggle("fa-eye-slash", !flg);
    if (document.getElementById("user_password_confirmation")) {
      const userPassConfirm = document.getElementById("user_password_confirmation");
      const flg_2 = userPassConfirm.type === "password";
      userPassConfirm.type = flg_2? "text" : "password";
      target.classList.toggle("fa-eye", flg_2);
      target.classList.toggle("fa-eye-slash", !flg_2);
    }
  }
});
