using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CrudAspNetMvc1N.Models
{
    [Table("Consultores")]
    public class Consultor
    {
        [Required]
        [MaxLength(100)]
        public string Nome { get; set; }
    }
}