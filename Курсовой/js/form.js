document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault(); // предотвращаем стандартное поведение формы
    this.reset(); // очищаем форму
});