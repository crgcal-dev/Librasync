using System.ComponentModel.DataAnnotations;

namespace LibrasyncAPI.Entity
{
    public class BookEntity
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(10)]
        public string? BookID { get; set; }

        [Required]
        [MaxLength(100)]
        public string? Title { get; set; }

        [Required]
        [MaxLength(100)]
        public string? Author { get; set; }

        [Required]
        [MaxLength(20)]
        public string? Genre { get; set; }

        [Required]
        [MaxLength(100)]
        public string? Publisher { get; set; }

        [Required]
        public DateTime PublicationDate { get; set; }

        [Required]
        [MaxLength(20)]
        public string? Edition { get; set; }

        [Required]
        [MaxLength(20)]
        public string? Language { get; set; }
    }
}
