    //Class for data publication
    class Publication{
        constructor(title, publication){
            this.title = title;
            this.publication = publication;
        }
    }
      

    //Class for DOM
    class Dom{

        Create(article){
            const div_publication = document.querySelector("#div_publication");
            const data = document.createElement("div");
            data.classList.add("publication");
            const numId =  document.getElementsByClassName("publication").length;
            data.innerHTML =`
                <div id="Div${numId+1}">
                    <h3>${article.title}</h3>
                    <p>
                        ${article.publication}
                    </p>
                    <a href="#" name="delete" id="delete">Delete</a>
                    <a href="#" name="update" id="update">Update</a>
                </div>
            `;
            div_publication.append(data);
            document.querySelector("#form_create").reset();
        }
                    
        DeleteOrUpdate(e){
            if( e.target.id === "delete"){
                this.Delete(e.target);
            }else if(e.target.id === "update"){
                this.DataUpdate(e.path[1]);
            }
        }

        Delete(e){
            e.parentElement.parentElement.remove();
        }

        DataUpdate(e){
                
            const id =  e.parentElement.getElementsByTagName("div")[0].attributes.id.value,
                  h1 =  e.querySelector("h3").innerHTML,
                  p =  e.querySelector("p").innerHTML,
                  edit = document.querySelector("#form_edit");
                    console.log(h1)
                  localStorage.setItem("DivId", id);

            edit.querySelector("#input_edit_title").value = h1;
            edit.querySelector("#input_edit_text").value = p;
            
        }

        Update(){
            const   div_id = localStorage.getItem("DivId"),
                    div_publication = document.querySelector(`#${div_id}`),
                    edit_title = document.querySelector("#input_edit_title").value,
                    edit_text = document.querySelector("#input_edit_text").value;

                    div_publication.querySelector("h3").innerHTML = edit_title;
                    div_publication.querySelector("p").innerHTML = edit_text;
                    document.querySelector("#form_edit").reset();
        }

    }

    //Events
    document.querySelector("#form_create").addEventListener("submit", (e) =>{

                e.preventDefault();

                const inpt_title = document.querySelector("#input_create_title").value,
                      inpt_text = document.querySelector("#input_create_text").value;


                    const publication = new Publication(inpt_title, inpt_text);
                    const dom = new Dom();
                    dom.Create(publication);
                    dom.ResetForm();
    
            });


    document.querySelector("#div_publication")
            .addEventListener("click", (e)=>{

                const dom = new Dom();
                dom.DeleteOrUpdate(e);

            });


    document.querySelector("#form_edit").addEventListener("submit", (e)=>{
        e.preventDefault();

                const dom = new Dom();
                dom.Update();
        

              
            });
        
    


                    



        
