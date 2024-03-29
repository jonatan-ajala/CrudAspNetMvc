﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CrudAspNetMvc1N.Models
{
    public class Cliente
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Nome { get; set; }

        [Required]
        [MaxLength(100)]
        public string Email { get; set; }

        [Required]
        [ForeignKey("Consultor")]
        public int  IdConsultor { get; set; }

        public virtual Consultor Consultor { get; set; }
        public virtual List<Telefone> Telefones { get; set; }
    }
}