import java.util.Scanner;

public class VisaoLivro {
    private final Scanner scanner = new Scanner(System.in);
    private ControladorLivro controlador;

    public VisaoLivro(ControladorLivro controlador) {
        this.controlador = controlador;
    }

    public String pegarTituloDoLivro() {
        System.out.print("Digite o título do livro: ");
        return scanner.nextLine();
    }

    public String pegarAutorDoLivro() {
        System.out.print("Digite o autor do livro: ");
        return scanner.nextLine();
    }

    public int pegarAnoDoLivro() {
        System.out.print("Digite o ano de publicação: ");
        while (!scanner.hasNextInt()) {
            System.out.println("Por favor, insira um ano válido.");
            scanner.next();
        }
        return scanner.nextInt();
    }

    public void exibeDetalhesDoLivro(String titulo, String autor, int ano) {
        System.out.println("\nDetalhes do Livro:");
        System.out.printf("Título: %s\nAutor: %s\nAno de Publicação: %d\n", titulo, autor, ano);
    }

    public void iniciar() {
        System.out.println("Sistema de Gerenciamento de Livros");
        System.out.println("-------------------------------");
        System.out.println();

        ModeloLivro modelo = controlador.registrarLivro(
            pegarTituloDoLivro(),
            pegarAutorDoLivro(),
            pegarAnoDoLivro()
        );

        exibeDetalhesDoLivro(modelo.getTitulo(), modelo.getAutor(), modelo.getAnoPublicacao());
    }
}
