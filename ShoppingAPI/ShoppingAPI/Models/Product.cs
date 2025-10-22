 
namespace ShoppingApp.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int CategoryId { get; set; }
        public virtual Category Category { get; set; } = null!;
        public Datetime DateOfBirth { get; set; }
    }
}
