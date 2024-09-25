function themeChanger() { 
        let curr_theme = document.getElementById("darkTheme");
        let curr_icon = document.getElementById("darkIcon");
        let curr_image = document.getElementById("darkImage");
        let icon = document.getElementById("icon");
            if(curr_theme.getAttribute('href') == "styles_dark.css") {
            curr_theme.setAttribute('href', "styles_light.css");
            curr_icon.setAttribute('href', "Images/icon_ideal2.png");
            curr_image.setAttribute('src', "Images/icon_ideal2.png");
            icon.className ="fa-solid fa-sun";
        }
        else if(curr_theme.getAttribute('href') == "styles_light.css") {
            curr_theme.setAttribute('href', "styles_dark.css");
            curr_icon.setAttribute('href', "Images/mountain_light.png");
            curr_image.setAttribute('src', "Images/mountain_light.png");
            icon.className   = "fa-solid fa-moon";
        }
}