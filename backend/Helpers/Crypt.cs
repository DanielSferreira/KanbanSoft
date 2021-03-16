namespace KanbanSoft.Helpers
{
    public static class Crypt
    {
        public static string Encrypt(string a)
            => BCrypt.Net.BCrypt.HashPassword(a);
        public static bool Decrypt(string pass, string hash)
        {
            try
            {
                return BCrypt.Net.BCrypt.Verify(pass, hash);
            }
            catch
            {
                return false;
            };
        }
    }
}