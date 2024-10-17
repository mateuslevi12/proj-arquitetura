public class RegistroLivrosApp {
    public static void main(String[] args) {
        ModeloLivro modelo = new ModeloLivro();
        ControladorLivro controlador = new ControladorLivro(modelo);
        VisaoLivro visao = new VisaoLivro(controlador);

        visao.iniciar();
    }
}
