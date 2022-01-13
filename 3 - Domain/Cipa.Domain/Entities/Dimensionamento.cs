using System;
using System.Collections.Generic;

namespace Cipa.Domain.Entities
{
    public class Dimensionamento : DimensionamentoBase
    {

        public Dimensionamento(int maximo, int minimo, int qtdaEfetivos, int qtdaSuplentes) :
            base(maximo, minimo, qtdaEfetivos, qtdaSuplentes)
        { }

        public Dimensionamento(DimensionamentoBase dimensionamento) :
            base(dimensionamento.Maximo, dimensionamento.Minimo, dimensionamento.QtdaEfetivos, dimensionamento.QtdaSuplentes)
        { }

        public int QtdaEleitores { get; set; }
        public int QtdaVotos { get; set; }
        public int QtdaInscricoesAprovadas { get; set; }
        public int QtdaInscricoesReprovadas { get; set; }
        public int QtdaInscricoesPendentes { get; set; }

        public int QtdaInscricoes
        {
            get
            {
                return QtdaInscricoesAprovadas + QtdaInscricoesPendentes + QtdaInscricoesReprovadas;
            }
        }

        public bool PossuiQtdaMinimaInscritos
        {
            get
            {
                return (QtdaInscricoesAprovadas + QtdaInscricoesPendentes) >= TotalCipeiros;
            }
        }


        public decimal PercentualMinimoVotos { get; set; }

        public int QtdaMinimaVotos
        {
            get
            {
                return (int)Math.Ceiling((decimal)QtdaEleitores * PercentualMinimoVotos);
            }
        }

        public bool PossuiQtdaMinimaVotos
        {
            get
            {
                return QtdaVotos >= QtdaMinimaVotos;
            }
        }

        protected override IEnumerable<object> GetAtomicValues()
        {
            foreach (var valor in base.GetAtomicValues()) yield return valor;
            yield return QtdaEleitores;
            yield return QtdaVotos;
            yield return QtdaInscricoesAprovadas;
            yield return QtdaInscricoesReprovadas;
            yield return QtdaInscricoesPendentes;
        }
    }
}