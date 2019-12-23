namespace Cipa.Domain.Helpers
{
    public static class PerfilUsuario
    {
        public const string Eleitor = "Eleitor";
        public const string SESMT = "SESMT";

    }

    public static class CustomClaimTypes
    {
        public const string CodigoConta = "accid";
        public const string UsuarioId = "userid";
        public const string DataExpiracaoConta = "accexp";
        public const string QtdaEstabelecimentos = "estqty";
        public const string ContaValida = "accvalid";
        public const string NomeUsuario = "username";
    }

    public static class EtapaProcessamentoArquivo
    {
        public const string ValidacaoDados = "Validação lógica dos dados";
        public const string Insercao = "Inserção dos dados na base";
    }

    public static class ColunasArquivo
    {
        public const string Matricula = "Matrícula";
        public const string Email = "Email";
        public const string Nome = "Nome";
        public const string Cargo = "Cargo";
        public const string Area = "Área";
        public const string DataAdmissao = "Data de Admissão";
        public const string DataNascimento = "Data de Nascimento";
        public const string NomeGestor = "Nome do Gestor";
        public const string EmailGestor = "Email do Gestor";
    }

    public static class DataTypeImportacao
    {
        public const string String = "String";
        public const string Email = "Email";
        public const string Date = "Date";
        public const string Int = "Int";
        public const string Decimal = "Decimal";
    }

    public static class Links
    {
        public const string URL = "http://localhost:4200";
        public const string Login = "/autenticacao/login";
        public const string Cadastro = "/autenticacao/cadastro";
        public const string Reset = "/autenticacao/reset";
        public const string Votacao = "/eleicoes/{id}/votacao";
        public const string Inscricoes = "/eleicoes/{id}/candidaturas/nova";
    }

    public static class PoliticasAutorizacao
    {
        public const string Bearer = "Bearer";
        public const string PossuiConta = "PossuiConta";
        public const string PossuiContaValida = "PossuiContaValida";
    }

    public static class FusosHorarios
    {
        public const string Brasilia = "E. South America Standard Time";
    }

}