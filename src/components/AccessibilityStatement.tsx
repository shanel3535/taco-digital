import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface AccessibilityStatementProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AccessibilityStatement: React.FC<AccessibilityStatementProps> = ({ open, onOpenChange }) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="overflow-y-auto" side="right">
        <SheetHeader className="text-right">
          <SheetTitle className="text-2xl mb-2">הצהרת נגישות</SheetTitle>
          <SheetDescription className="text-base">
            לפי תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע"ג-2013
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 space-y-4 text-right">
          <section className="space-y-2">
            <h3 className="text-lg font-semibold">כללי</h3>
            <p>
              אתר זה שואף לאפשר שימוש נוח ויעיל עבור אנשים עם מוגבלות, בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות) תשע"ג-2013, תקן ישראלי 5568 והנחיות הנגישות המקובלות באינטרנט WCAG2.1 ברמת AA.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-lg font-semibold">אמצעי הנגישות באתר</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>התאמת גודל טקסט לנוחות הקריאה</li>
              <li>התאמת ניגודיות וצבעים לשיפור הנראות</li>
              <li>אפשרות לשימוש בגופן ידידותי לדיסלקטים</li>
              <li>אפשרות להגדלת סמן העכבר לנוחות השימוש</li>
              <li>אפשרות להפחתת אנימציות</li>
              <li>שינוי מרווח בין אותיות ושורות</li>
              <li>אפשרות לשינוי יישור טקסט</li>
              <li>הדגשת קישורים</li>
              <li>מצב מיקוד לריכוז באלמנטים אקטיביים</li>
              <li>סרגל קריאה לעזרה בקריאת טקסט</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="text-lg font-semibold">מידת הנגישות</h3>
            <p>
              אתר זה תואם לדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע"ג-2013 ונבדק על-ידי יועצי נגישות מוסמכים. האתר עומד ברמת תאימות AA לפי הנחיות WCAG 2.1.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-lg font-semibold">הסדרי נגישות בחברה</h3>
            <p>
              החברה מספקת שירות נגיש בהתאם לדרישות החוק והתקנות. משרדינו נגישים והשירות הניתן על ידינו מותאם לאנשים עם מוגבלות.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-lg font-semibold">פרטי רכז נגישות</h3>
            <p>שם: רכז נגישות</p>
            <p>טלפון: 053-470-3003</p>
            <p>דוא"ל: takodigital35@gmail.com</p>
          </section>

          <section className="space-y-2">
            <h3 className="text-lg font-semibold">פניות ומשוב בנושאי נגישות</h3>
            <p>
              נתקלתם בבעיה בנושא נגישות? אנא פנו אלינו באמצעות דואר אלקטרוני בכתובת takodigital35@gmail.com ואנו נעשה כל מאמץ לטפל בפנייתכם בהקדם האפשרי.
            </p>
          </section>

          <section className="space-y-2 mb-6">
            <h3 className="text-lg font-semibold">תאריך עדכון ההצהרה</h3>
            <p>הצהרת הנגישות עודכנה לאחרונה בתאריך: 9 במאי 2025</p>
          </section>

          <div className="pt-4 border-t">
            <SheetClose asChild>
              <Button className="w-full">סגור</Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AccessibilityStatement;
