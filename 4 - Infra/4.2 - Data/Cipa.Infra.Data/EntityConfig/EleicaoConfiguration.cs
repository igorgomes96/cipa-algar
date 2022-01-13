using Cipa.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Cipa.Infra.Data.EntityConfig
{
    public class EleicaoConfiguration : IEntityTypeConfiguration<Eleicao>
    {
        public void Configure(EntityTypeBuilder<Eleicao> builder)
        {

            builder.HasKey(e => e.Id);

            builder.Property(e => e.Gestao)
                .IsRequired();

            builder.Property(e => e.DuracaoGestao)
                .IsRequired();

            builder.HasOne(e => e.Estabelecimento)
                .WithMany(e => e.Eleicoes)
                .HasForeignKey(e => e.EstabelecimentoId)
                .IsRequired();

            builder.Property(e => e.DataInicio)
                .IsRequired();

            builder.HasOne(e => e.Usuario)
                .WithMany()
                .HasForeignKey(e => e.UsuarioCriacaoId)
                .IsRequired();

            builder.HasOne(e => e.Conta)
                .WithMany()
                .HasForeignKey(e => e.ContaId)
                .IsRequired();

            builder.Property(e => e.DataCadastro)
                .IsRequired();

            builder.Property(e => e.DataFinalizacaoPrevista)
                .IsRequired();

            builder.HasOne(e => e.Grupo)
                .WithMany()
                .HasForeignKey(e => e.GrupoId)
                .IsRequired()
                .Metadata.DependentToPrincipal.SetPropertyAccessMode(PropertyAccessMode.Field);

            builder.OwnsOne(e => e.Dimensionamento,
                map => {
                    map.Ignore(e => e.Id)
                       .Ignore(e => e.PossuiQtdaMinimaInscritos)
                       .Ignore(e => e.PossuiQtdaMinimaVotos)
                       .Ignore(e => e.QtdaInscricoes)
                       .Ignore(e => e.PercentualMinimoVotos)
                       .Ignore(e => e.QtdaMinimaVotos)
                       .Ignore(e => e.TotalCipeiros);
                    map.Property(e => e.Minimo).HasColumnName("DimensionamentoMinEleitores");
                    map.Property(e => e.Maximo).HasColumnName("DimensionamentoMaxEleitores");
                    map.Property(e => e.QtdaEfetivos).HasColumnName("DimensionamentoQtdaEfetivos");
                    map.Property(e => e.QtdaSuplentes).HasColumnName("DimensionamentoQtdaSuplentes");
                    map.Property(e => e.QtdaEleitores).HasColumnName("QtdaEleitores");
                    map.Property(e => e.QtdaVotos).HasColumnName("QtdaVotos");
                    map.Property(e => e.QtdaInscricoesAprovadas).HasColumnName("QtdaInscricoesAprovadas");
                    map.Property(e => e.QtdaInscricoesReprovadas).HasColumnName("QtdaInscricoesReprovadas");
                    map.Property(e => e.QtdaInscricoesPendentes).HasColumnName("QtdaInscricoesPendentes");
                }).UsePropertyAccessMode(PropertyAccessMode.Field);

            builder.OwnsOne(e => e.Configuracao,
                map => {
                    map.Property(c => c.EnvioEditalConvocao).HasColumnName("EnvioEditalConvocao").IsRequired();
                    map.Property(c => c.EnvioConviteInscricao).HasColumnName("EnvioConviteInscricao").IsRequired();
                    map.Property(c => c.EnvioConviteVotacao).HasColumnName("EnvioConviteVotacao").IsRequired();
                });


            builder.HasIndex(e => new { e.EstabelecimentoId, e.Gestao }).IsUnique();
        }
    }
}