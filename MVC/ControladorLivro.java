public class ControladorLivro {
    private final ModeloLivro modeloLivro;
    private final VisaoLivro visaoLivro;

    public ControladorLivro(ModeloLivro modeloLivro, VisaoLivro visaoLivro) {
        this.modeloLivro = modeloLivro;
        this.visaoLivro = visaoLivro;
    }

    public void registrarLivro() {
        String titulo = visaoLivro.pegarTituloDoLivro();
        String autor = visaoLivro.pegarAutorDoLivro();
        int ano = visaoLivro.pegarAnoDoLivro();

        modeloLivro.setTitulo(titulo);
        modeloLivro.setAutor(autor);
        modeloLivro.setAnoPublicacao(ano);

        visaoLivro.exibeDetalhesDoLivro(
            modeloLivro.getTitulo(),
            modeloLivro.getAutor(),
            modeloLivro.getAnoPublicacao()
        );
    }
}