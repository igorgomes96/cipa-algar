﻿using System;
using System.ComponentModel.DataAnnotations;

namespace Cipa.WebApi.ViewModels
{
    public class UsuarioViewModel
    {
        public int Id { get; set; }
        [EmailAddress(ErrorMessage = "E-mail em formato inválido.")]
        [StringLength(100, ErrorMessage = "O e-mail pode conter no máximo {1} caracteres.")]
        public string Email { get; set; }
        [StringLength(100, ErrorMessage = "O login pode conter no máximo {1} caracteres.")]
        [Required(ErrorMessage = "O login do usuário deve ser informado.")]
        public string Login { get; set; }
        [Required(ErrorMessage = "O nome do usuário deve ser informado.")]
        [StringLength(255, ErrorMessage = "O nome pode conter no máximo {1} caracteres.")]
        public string Nome { get; set; }
        [StringLength(255, ErrorMessage = "O cargo pode conter no máximo {1} caracteres.")]
        public string Cargo { get; set; }
        public Guid? CodigoRecuperacao { get; set; }
        public string Senha { get; set; }
        public int MetodoAutenticacao { get; set; }
    }
}
