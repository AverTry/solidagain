import { onMount } from "solid-js"

export default function Themed() {
  function ToggleTheme(theme = "OS") {
    const toggle = document.querySelector(".checkbox")
    switch (theme) {
      case "dark": {
        localStorage.hasTheme = "dark"
        document.firstElementChild?.setAttribute("color-scheme", "dark")
        toggle.checked = true
        break
      }
      case "light": {
        localStorage.hasTheme = "light"
        document.firstElementChild?.setAttribute("color-scheme", "light")
        toggle.checked = false
        break
      }
      default: {
        localStorage.removeItem("hasTheme")
        document.firstElementChild?.removeAttribute("color-scheme")
        toggle.readOnly = toggle.indeterminate = true
      }
    }
  }
  onMount(() => {
    ToggleTheme(localStorage.hasTheme)

    const cba = document.querySelector(".checkbox")

    cba.addEventListener("click", () => {
      /* Turn Checkbox into a Clockwise Tri-State onClick */
      if (cba.readOnly) {
        cba.readOnly = false
        cba.checked = true
      } else if (cba.checked) {
        cba.readOnly = cba.indeterminate = true
      }

      /* Handle the Three States  */
      cba.indeterminate
        ? ToggleTheme("OS")
        : cba.checked
        ? ToggleTheme("dark")
        : ToggleTheme("light")
    })
  })

  return (
    <>
      <style jsx global>
        {`
          html {
            /* light */
            --light-accent: #8e8aff;
            --light-document: #e7e2ff;
            --light-surface: #b6a6d1;
            --light-text: #4d435e;

            /* dark */
            --dark-accent: orange;
            --dark-document: rgb(27, 25, 25);
            --dark-surface: #3e2b56;
            --dark-text: #f6daaa;
          }

          :root {
            color-scheme: light;
            --accent: var(--light-accent);
            --document: var(--light-document);
            --surface: var(--light-surface);
            --text: var(--light-text);
          }

          @media (prefers-color-scheme: dark) {
            :root {
              color-scheme: dark;
              --accent: var(--dark-accent);
              --document: var(--dark-document);
              --surface: var(--dark-surface);
              --text: var(--dark-text);
            }
          }

          [color-scheme="light"] {
            color-scheme: light;
            --accent: var(--light-accent);
            --document: var(--light-document);
            --surface: var(--light-surface);
            --text: var(--light-text);
          }

          [color-scheme="dark"] {
            color-scheme: dark;
            --accent: var(--dark-accent);
            --document: var(--dark-document);
            --surface: var(--dark-surface);
            --text: var(--dark-text);
          }

          html {
            background: var(--document);
            color: var(--text);
          }
        `}
      </style>
      <style jsx>{`
        .checkbox-wrapper input[type="checkbox"] {
          visibility: hidden;
          display: none;
        }

        /* control size by font */
        .checkbox-wrapper {
          font-size: calc(-1px + 2vmin);
        }

        /* The switch - the box around the slider */
        .checkbox-wrapper .switch {
          --width-of-switch: 3.5em;
          --height-of-switch: 2em;
          /* size of sliding icon -- sun and moon */
          --size-of-icon: 1.4em;
          /* it is like a inline-padding of switch */
          --slider-offset: 0.2em;
          position: relative;
          width: var(--width-of-switch);
          height: var(--height-of-switch);
          display: inline-block;
        }

        /* The slider */
        .checkbox-wrapper .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: transparent;
          transition: 0.1s;
          border-radius: 30px;
          border: var(--accent) solid 2px;
        }

        .checkbox-wrapper .slider:before {
          position: absolute;
          content: "";
          height: var(--size-of-icon, 1.4em);
          width: var(--size-of-icon, 1.4em);
          border-radius: 20px;
          left: var(--slider-offset, 0.2em);
          top: 50%;
          transform: translateY(-50%);
          background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
          transition: 0.1s;
        }

        .checkbox-wrapper input:checked + .slider:before {
          left: calc(
            100% - (var(--size-of-icon, 1.4em) + var(--slider-offset, 0.2em))
          );
          background: transparent;
          box-shadow: inset -3px -2px 5px -2px #8983f7,
            inset -7px -3px 0 0 #a3dafb;
           {
            /* -10px -4px */
          }
        }

        .checkbox-wrapper input:indeterminate + .slider:before {
          left: calc(
            79% - (var(--size-of-icon, 1.4em) + var(--slider-offset, 0.2em))
          );
          box-shadow: inset -3px -2px 5px -2px #8983f7,
            inset -7px -3px 0 0 #a3dafb;
           {
            /* -10px -4px */
          }
        }
      `}</style>

      <div class="checkbox-wrapper">
        <label class="switch fade-inn">
          <input type="checkbox" class={"checkbox"} />
          <span class="slider"></span>
        </label>
      </div>
    </>
  )
}
