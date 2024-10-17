public class RegistroLivrosApp {
    public static void main(String[] args) {
        ModeloLivro modelo = new ModeloLivro();
        VisaoLivro visao = new VisaoLivro();
        ControladorLivro controlador = new ControladorLivro(modelo, visao);

        controlador.registrarLivro();
       
    }
}
