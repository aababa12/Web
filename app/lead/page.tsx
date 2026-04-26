export default function LeadPage() {
  return (
    <main className="lead-shell">
      <section className="lead-hero">
        <div className="lead-copy">
          <p className="eyebrow">תיאום שיחה תוך 24 שעות</p>
          <h1>עמוד ליד מהיר, חד, ומוכן לקלוט פניות</h1>
          <p className="lead-text">
            השארנו את המבנה פשוט כדי שתוכל לחבר אותו בקלות ל־CRM, ל־email,
            או ל־API פנימי בהמשך.
          </p>
          <ul className="lead-points">
            <li>טופס קצר עם שדות ברורים</li>
            <li>היררכיה חזותית חזקה למובייל ודסקטופ</li>
            <li>מוכן להרחבה עם ולידציה ו־submit אמיתי</li>
          </ul>
        </div>

        <form className="lead-form">
          <div>
            <label htmlFor="fullName">שם מלא</label>
            <input id="fullName" name="fullName" type="text" placeholder="ישראל ישראלי" />
          </div>

          <div>
            <label htmlFor="phone">טלפון</label>
            <input id="phone" name="phone" type="tel" placeholder="050-123-4567" />
          </div>

          <div>
            <label htmlFor="email">אימייל</label>
            <input id="email" name="email" type="email" placeholder="name@example.com" />
          </div>

          <div>
            <label htmlFor="details">מה מעניין אותך?</label>
            <textarea
              id="details"
              name="details"
              rows={4}
              placeholder="תאר בקצרה מה אתה צריך ונחזור אליך"
            />
          </div>

          <button type="submit">שליחת פרטים</button>
        </form>
      </section>
    </main>
  );
}
