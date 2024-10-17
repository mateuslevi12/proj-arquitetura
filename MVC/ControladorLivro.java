public class ControladorLivro {
    private final ModeloLivro modeloLivro;
   

    public ControladorLivro(ModeloLivro modeloLivro) {
        this.modeloLivro = modeloLivro;
    }

    public ModeloLivro registrarLivro(String titulo, String autor, int ano) {

        modeloLivro.setTitulo(titulo);
        modeloLivro.setAutor(autor);
        modeloLivro.setAnoPublicacao(ano);

        return modeloLivro;
    }
}