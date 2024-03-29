using System;

namespace Cipa.Domain.Entities
{
    public enum DependencyFileType
    {
        TemplateCronograma,
        DocumentoCronograma,
        Importacao
    }
    public class Arquivo : Entity<int>
    {
        public Arquivo(string path, string nome, long tamanho, string contentType, string loginUsuario, string nomeUsuario, DependencyFileType dependencyType, int dependencyId)
        {
            Path = path;
            Nome = nome;
            Tamanho = tamanho;
            ContentType = contentType;
            LoginUsuario = loginUsuario;
            NomeUsuario = nomeUsuario;
            DependencyType = dependencyType;
            DependencyId = dependencyId;
        }

        public string Path { get; set; }
        public string Nome { get; private set; }
        public long Tamanho { get; private set; }
        public string ContentType { get; private set; }
        public string LoginUsuario { get; private set; }
        public string NomeUsuario { get; private set; }
        public DependencyFileType DependencyType { get; private set; }
        public int DependencyId { get; private set; }
        public DateTime DataCadastro { get; private set; }

    }
}
