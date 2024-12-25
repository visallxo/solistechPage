        // document.addEventListener("DOMContentLoaded", function() {

        //     const apiUrl = "https://restcountries.com/v3.1/all";
          
           
        //     fetch(apiUrl)
        //       .then(response => response.json())
        //       .then(data => {
        //         const countrySelect = document.getElementById("country");
          
               
        //         data.forEach(country => {
        //           const countryCode = country.idd && country.idd.root ? country.idd.root + country.idd.suffixes[0] : null;
        //           if (countryCode) {
        //             const option = document.createElement("option");
        //             option.value = countryCode;
        //             option.textContent = `${country.name.common} `;
        //             countrySelect.appendChild(option);
        //           }
        //         });
        //       })
        //       .catch(error => console.error("Error fetching country data:", error));
          
            
        //     document.getElementById("country").addEventListener("change", function() {
        //       const selectedCountryCode = this.value;
        //       const phoneInput = document.getElementById("phone_number");
          
              
        //       if (selectedCountryCode) {
        //         phoneInput.value = selectedCountryCode + " "; 
        //       } else {
        //         phoneInput.value = ""; 
        //       }
        //     });
        //   });

          // fetch("https://restcountries.com/v3.1/all")
          // .then(response => response.json())
          // .then(countries => {
          //     const dropdown = document.getElementById("countryDropdown");
          //     countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
  
          //     countries.forEach(country => {
          //         const option = document.createElement("option");
          //         option.value = country.cca2; 
          //         option.textContent = country.name.common;
          //         dropdown.appendChild(option);
          //     });
          // })
          // .catch(error => console.error("Error fetching country data:", error));

          // document.addEventListener("DOMContentLoaded", function () {
          //   const apiUrl = "https://restcountries.com/v3.1/all";
          
          //   fetch(apiUrl)
          //     .then((response) => response.json())
          //     .then((data) => {
          //       const countrySelect = document.getElementById("country");
          
          //       data.forEach((country) => {
          //         const root = country.idd?.root || "";
          //         const suffix = country.idd?.suffixes?.[0] || ""; 
          //         const countryCode = root + suffix;
          
          //         if (countryCode) {
          //           const option = document.createElement("option");
          //           option.value = countryCode; 
          //           option.textContent = country.name.common;
          //           countrySelect.appendChild(option);
          //         }
          //       });
          //     })
          //     .catch((error) => console.error("Error fetching country data:", error));
      
          //   document.getElementById("country").addEventListener("change", function () {
          //     const selectedCountryCode = this.value;
          //     const phoneInput = document.getElementById("phone_number");
          
          //     phoneInput.value = selectedCountryCode
          //       ? `${selectedCountryCode} ` 
          //       : "";
          //   });
          
           
          //   document.getElementById("downloadButton").addEventListener("click", function () {
          //     const fileUrl = "assets/testing-doc.docx"; 
          //     const a = document.createElement("a");
          //     a.href = fileUrl;
          //     a.download = "testing-doc.docx"; 
          //     document.body.appendChild(a);
          //     a.click(); 
          //     document.body.removeChild(a); 
          //   });
          // });  //half passed
          
          document.addEventListener("DOMContentLoaded", function () {
            const apiUrl = "https://restcountries.com/v3.1/all";
        
            fetch(apiUrl)
                .then((response) => response.json())
                .then((data) => {
                    const countrySelect = document.getElementById("country");
        
                    data.forEach((country) => {
                        const root = country.idd?.root || "";
                        const suffix = country.idd?.suffixes?.[0] || ""; 
                        const countryCode = root + suffix;
        
                        if (countryCode) {
                            const option = document.createElement("option");
                            option.value = countryCode; 
                            option.textContent = country.name.common;
                            countrySelect.appendChild(option);
                        }
                    });
                })
                .catch((error) => console.error("Error fetching country data:", error));

            const countryHiddenInput = document.createElement("input");
            countryHiddenInput.type = "hidden";
            countryHiddenInput.name = "country";
            document.querySelector("form").appendChild(countryHiddenInput);
        
            document.getElementById("country").addEventListener("change", function () {
                const selectedCountryCode = this.value;
                const phoneInput = document.getElementById("phone_number");
        
                phoneInput.value = selectedCountryCode ? `${selectedCountryCode} ` : "";

                countryHiddenInput.value = this.options[this.selectedIndex].text;
            });
        
            document.querySelector("form").addEventListener("submit", function (event) {
                event.preventDefault(); 
        
                const form = this;
                const requiredFields = form.querySelectorAll("[required]");
                let allValid = true;
      
                requiredFields.forEach((field) => {
                    if (!field.value.trim()) {
                        allValid = false;
                        field.classList.add("is-invalid"); 
                    } else {
                        field.classList.remove("is-invalid"); 
                    }
                });
        
                if (allValid) {
                    const formData = new FormData(form);
        
                    fetch(form.action, {
                        method: "POST",
                        body: formData,
                    })
                        .then((response) => {
                            if (response.ok) {
                                alert("Form submitted successfully!");
                                const fileUrl = "assets/testing-doc.docx"; 
                                const a = document.createElement("a");
                                a.href = fileUrl;
                                a.download = "testing-doc.docx"; 
                                document.body.appendChild(a);
                                a.click(); 
                                document.body.removeChild(a); 
                            } else {
                                alert("Form submission failed. Please try again.");
                            }
                        })
                        .catch((error) => {
                            console.error("Error submitting form:", error);
                            alert("An error occurred. Please try again.");
                        });
                } else {
                    alert("Please fill in all required fields before submitting.");
                }
            });
        }); //fully passed 
        