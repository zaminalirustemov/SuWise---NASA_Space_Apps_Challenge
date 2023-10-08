using Microsoft.AspNetCore.Mvc;

namespace Aqua.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}