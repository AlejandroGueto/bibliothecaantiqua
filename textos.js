// ARCHIVO: textos.js - CORPUS GRAECUM MASTER OMNIA v11.5
// 14 Autores - Fragmentos Masivos - Estructura Trilingüe

const canon = [
    {
        author: "Ὅμηρος (Homero)",
        works: [
            {
                title: "Ἰλιάς", title_es: "Ilíada", title_en: "Iliad", title_fr: "Iliade",
                meta: "Canto I (La Peste y la Cólera - vv. 1-250)",
                content: `Μῆνιν ἄειδε θεὰ Πηληϊάδεω Ἀχιλῆος οὐλομένην, ἣ μυρί᾽ Ἀχαιοῖς ἄλγε᾽ ἔθηκε, πολλὰς δ᾽ ἰφθίμους ψυχὰς Ἄϊδι προΐαψεν ἡρώων, αὐτοὺς δὲ ἑλώρια τεῦχε κύνεσσιν οἰωνοῖσί τε πᾶσι, Διὸς δ᾽ ἐτελείετο βουλή, ἐξ οὗ δὴ τὰ πρῶτα διαστήτην ἐρίσαντε Ἀτρεΐδης τε ἄναξ ἀνδρῶν καὶ δῖος Ἀχιλλεύς. Τίς τ᾽ ἄρ σφωε θεῶν ἔριδι ξυνέηκε μάχεσθαι; Λητοῦς καὶ Διός υἱός· ὁ γὰρ βασιλῆϊ χολωθεὶς νοῦσον ἀνὰ στρατὸν ὦρσε κακήν, ὀλέκοντο δὲ λαοí, οὕνεκα τὸν Χρύσην ἠτίμασεν ἀρητῆρα Ἀτρεΐδης· ὃ γὰρ ἦλθε θοὰς ἐπὶ νῆας Ἀχαιῶν λυσόμενός τε θύγατρα φέρων τ᾽ ἀπερείσι᾽ ἄποινα, στέμματ᾽ ἔχων ἐν χερσὶν ἑκηβόλου Ἀπόλλωνος χρυσέῳ ἀνὰ σκήπτρῳ, καὶ λίσσετο πάντας Ἀχαιούς, Ἀτρεΐδα δὲ μάλιστα δύω, κοσμήτορε λαῶν· «Ἀτρεΐδαι τε καὶ ἄλλοι ἐϋκνήμιδες Ἀχαιοí, ὑμῖν μὲν θεοὶ δοῖεν Ὀλύμπια δώματ᾽ ἔχοντες ἐκπέρσαι Πριάμοιο πόλιν, εὖ δ᾽ οἴκαδ᾽ ἱκέσθαι· παῖδα δ᾽ ἐμοὶ λύσαιτε φíλην, τὰ δ᾽ ἄποινα δέχεσθαι, ἁζόμενοι Διὸς υἱὸν ἑκηβόλον Ἀπόλλωνα.» Ἔνθ᾽ ἄλλοι μὲν πάντες ἐπευφήμησαν Ἀχαιοὶ αἰδεῖσθαí θ᾽ ἱερῆα καὶ ἀγλαὰ δέχθαι ἄποινα· ἀλλ᾽ οὐκ Ἀτρεΐδῃ Ἀγαμέμνονι ἥνανε θυμῷ, ἀλλὰ κακῶς ἀφíει, κρατερὸν d᾽ ἐπὶ μῦθον ἔτελλε· «Μή σε, γέρον κοíλησιν ἐγὼ παρὰ νηυσὶ κιχεíω ἢ νῦν δηθύνοντ᾽ ἢ ὕστερον αὖτις ἰόντα, μή νύ τοι οὐ χραíσμῃ σκῆπτρον καὶ στέμμα θεοῖο· τὴν d᾽ ἐγὼ οὐ λύσω· πρíν μιν καὶ γῆρας ἔπεισιν ἡμετέρῳ ἐνὶ οíκῳ ἐν Ἄργεϊ, τηλόθι πάτρης, ἱστὸν ἐποιχομένην καὶ ἐμὸν λέχος ἀντιόωσαν· ἀλλ᾽ ἴθι μή μ᾽ ἐρέθιζε, σαώτερος ὥς κε νέηαι.»`,
                translations: [
                    { lang: "ES | Literaria", text: "Canta, oh diosa, la cólera del Pelida Aquiles; cólera funesta que causó infinitos males...", author: "Luis Segalá" },
                    { lang: "ES | Literal", text: "Cólera canta, oh diosa, de el de Peleo hijo Aquiles, la destructora, que mil dolores puso...", author: "Ed. Académica" },
                    { lang: "English", text: "Sing, goddess, the destructive wrath of Achilles, son of Peleus...", author: "A.T. Murray" },
                    { lang: "Français", text: "Chante, déesse, la colère d'Achille, fils de Pélée; colère funeste...", author: "P. Mazon" }
                ]
            },
            {
                title: "Ὀδύσσεια", title_es: "Odisea", title_en: "Odyssey", title_fr: "Odyssée",
                meta: "Canto I (vv. 1-150)",
                content: `Ἄνδρα μοι ἔννεπε, μοῦσα, πολύτροπον, ὃς μάλα πολλὰ πλάγχθη, ἐπεὶ Τροίης ἱερὸν πτολίεθρον ἔπερσε· πολλῶν δ’ ἀνθρώπων ἴδεν ἄστεα καὶ νόον ἔγνω, πολλὰ δ’ ὅ γ’ ἐν πόντῳ πάθεν ἄλγεα ὃν κατὰ θυμόν, ἀρνύμενος ἥν τε ψυχὴν καὶ νόστον ἑταίρων. ἀλλ’ οὐδ’ ὣς ἑτάρους ἐρρύσατο, ἱέμενός περ· αὐτῶν γὰρ σφετέρησιν ἀτασθαλίῃσιν ὄλοντο, νήπioι, οἳ κατὰ βοῦς Ὑπερίονος Ἠελίοιο ἤσθιον· αὐτὰρ ὁ τοῖσιν ἀφείλεto νόστιμον ἦμαρ. τῶν ἁμόθεν γε, θεά, θύγατερ Διός, εἰπὲ καὶ ἡμῖν. Ἔνθ’ ἄλλοι μὲν πάντες, ὅσοι φύγον αἰπὺν ὄλεθρον, οἴκοι ἔσαν, πόλεμόν τε πεφευγότες ἠδὲ θάλασσαν· τὸν δ’ οἶον νόστου κεχρημένον ἠδὲ γυναικὸς νύμφη πότνι’ ἔρυκε Καλυψὼ δῖα θεάων ἐν σπέσσι γλαφυροῖσι.`,
                translations: [
                    { lang: "ES | Literaria", text: "Háblame, Musa, del varón de multiforme ingenio...", author: "J.M. Pabón" },
                    { lang: "ES | Literal", text: "Al hombre para mí cuenta, oh Musa, el muy versátil, que muy mucho anduvo errante...", author: "Trad. Académica" },
                    { lang: "English", text: "Tell me, O Muse, of the man of many devices...", author: "A.T. Murray" },
                    { lang: "Français", text: "Dis-moi, Muse, cet homme à l'esprit souple...", author: "L. Medard" }
                ]
            }
        ]
    },
    {
        author: "Ἡσίοδος (Hesíodo)",
        works: [{
            title: "Θεογονία", title_es: "Teogonía", title_en: "Theogony", title_fr: "Théogonie",
            meta: "vv. 1-115 (Proemio Completo)",
            content: `Μουσάων Ἑλικωνιάδων ἀρχώμεθ᾽ ἀείδειν, αἵ θ᾽ Ἑλικῶνος ἔχουσιν ὄρος μέγα τε ζάθεόν τε, καί τε περὶ κρήνην ἰοειδέα πόσσ᾽ ἁπαλοῖσιν ὀρχεῦνται καὶ βωμὸν ἐρισθενέος Κρονίωνος· καί τε λοεσσάμεναι τέρενα χρόα Περμησσοῖο ἢ Ἵππου κρήνης ἢ Ὀλμειοῦ ζαθέοio ἀκροτάτῳ Ἑλικῶνι χοροὺς ἐνεποιήσαντο καλούς, ἱμερόεντας· ἐπερρώσαντο δὲ ποσσίν. ἔνθεν ἀπορνύμεναι κεκαλυμμέναι ἠέρι πολλῷ ἐννύχιαι στεῖχον περικαλλέα ὄσσαν ἱεῖσαι, ὑμνοῦσαι Δία τ᾽ αἰγίοchον καὶ πότνιαν Ἥρην Ἀργεΐην, χρυσέοισι πεδíλοις ἐμβεβαυῖαν, κούρην τ᾽ αἰγιόχοιο Διὸς γλαυκῶπιν Ἀθήνην Φοῖβόν τ᾽ Ἀπόλλωνα καὶ Ἄρτεμιν ἰοchέαιραν ἠδὲ Ποσειδάωνα γαιήοχον ἐννοσíγαιον καὶ Θέμιν αἰδοíην.`,
            translations: [
                { lang: "ES | Literaria", text: "Comencemos nuestro canto por las Musas Heliconíadas...", author: "Gredos" },
                { lang: "ES | Literal", text: "De las Musas Heliconíadas comencemos a cantar...", author: "Trad. Literal" },
                { lang: "English", text: "From the Heliconian Muses let us begin to sing...", author: "H. Evelyn-White" },
                { lang: "Français", text: "Chantons pour commencer les Muses Héliconiennes...", author: "P. Mazon" }
            ]
        }]
    },
    {
        author: "Σαπφώ (Safo)",
        works: [{
            title: "Ποιήματα", title_es: "Poemas", title_en: "Poems", title_fr: "Poèmes",
            meta: "Fragmentos I y 31 (Lírica)",
            content: `ποικιλόθρον᾽ ἀθάνατ᾽ Ἀφρόδιτα, παῖ Δίος δολόπλοκε, λίσσομαí σε, μή μ᾽ ἄσαισι μηδ᾽ ὀνíαισι δάμνα, πότνια, θῦμον, ἀλλὰ τυῖδ᾽ ἔλθ᾽, αἴ ποτα κἀτέρωτα τᾶς ἔμας αὔδας ἀΐοισα πήλοι ἔκλυες, πάτρος δὲ δόμον λίποισα χρύσιον ἦλθες. [Frag. 31]: φαíνεταí μοι κῆνος ἴσος θέοισιν ἔμμεν᾽ ὤνηρ, ὄττις ἐνάντιός τοι ἰσδάνει καὶ πλάσιον ἆδυ φωνεíσας ὑπακούει καὶ γελαíσας ἰμέροεν, τό μ᾽ ἦ μὰν καρδíαν ἐν στήθεσιν ἐπτόασεν· ὡς γὰρ ἔς σ᾽ ἴδω βρόχε᾽ ὥς me φώνησ᾽ οὐδὲν ἔτ᾽ εἴκει, ἀλλὰ κὰμ μὲν γλῶσσα ἔαγε, λέπτον δ᾽ αὔτικα χρῷ πῦρ ὑπαδεδρόμακεν.`,
            translations: [
                { lang: "ES | Literaria", text: "Inmortal Afrodita de trono brillante, tejedora de engaños...", author: "Ferraté" },
                { lang: "ES | Literal", text: "De variado trono inmortal Afrodita, hija de Zeus tejedora de engaños...", author: "Trad. Literal" },
                { lang: "English", text: "Deathless Aphrodite of the spangled mind, weaver of wiles...", author: "Loeb" },
                { lang: "Français", text: "Immortelle Aphrodite, au trône étincelant...", author: "T. Reinach" }
            ]
        }]
    },
    {
        author: "Σοφοκλῆς (Sófocles)",
        works: [{
            title: "Οἰδίπους Τύραννος", title_es: "Edipo Rey", title_en: "Oedipus Rex", title_fr: "Œdipe roi",
            meta: "vv. 1-150 (Tragedia)",
            content: `Ὦ τέκνα, Κάδμου τοῦ πάλαι νέα τροφή, τίνας ποθ’ ἕδρας τάσδε μοι θοάζετε ἱκτηρίοις κλάδοισιν ἐξεστεμμένοι; πόλις δ’ ὁμοῦ μὲν θυμιαμάτων γέμει, ὁμοῦ δὲ παιάνων τε καὶ στεναγμάτων· ἁγὼ δικαιῶν μὴ παρ’ ἀγγέλων, τέκνα, ἄλλων ἀκούειν αὐτὸς ὧδ’ ἐλήluθα, ὁ πᾶσι κλεινὸς Οἰδίπους καλούμενος. ἀλλ᾽, ὦ γεραιέ, φράζ᾽, ἐπεὶ πρέπων ἔφυς πρὸ τῶνδε φωνεῖν, τίνi τρόπῳ καθέστατε, δείσαντες ἢ στέρξαντες; ὡς θέλοντος ἂν ἐμοῦ προσαρκεῖν πᾶν· δυσάλγητος γὰρ ἂν εἴην τοiάνδε μὴ οὐ κατοikτίρων ἕδραν. [Sacerdote]: ἀλλ᾽ ὦ κρατύνων Οἰδίπους ἐμῆς chθονός, ὁρᾷς μὲν ἡμᾶς ἡλίκοι προσήμεθα βωμοῖσι τοῖς σοῖς.`,
            translations: [
                { lang: "ES | Literaria", text: "¡Oh hijos, nueva prole del antiguo Cadmo!", author: "Assela Alamillo" },
                { lang: "English", text: "O my children, latest generation of old Cadmus...", author: "R. Jebb" },
                { lang: "Français", text: "O mes enfants, nouvelle lignée du vieux Cadmos...", author: "P. Masqueray" }
            ]
        }]
    },
    {
        author: "Πλάτων (Platón)",
        works: [{
            title: "Ἀπολογία Σωκράτους", title_es: "Apología de Sócrates", title_en: "Apology of Socrates", title_fr: "Apologie de Socrate",
            meta: "17a-20c (Exordio completo)",
            content: `Ὅτι μὲν ὑμεῖς, ὦ ἄνδρες Ἀθηναῖoi, πεπόνθατε ὑπὸ τῶν ἐμῶν κατηγόρων, οὐκ οἶδα· ἐγὼ δ᾽ οὖν καὶ αὐτὸς ὑπ᾽ αὐτῶν ὀλíγου ἐμαυτοῦ ἐπελαθόμην, οὕτω πιθανῶς ἔλεγον. καíτοι ἀληθές γε ὡς ἔπος εἰπεῖν οὐδὲν εἰρήκασιν. μάλιστα δὲ αὐτῶν ἓν ἐθαύμασα τῶν πολλῶν ὧν ἐψεύσαντο, τοῦτο ἐν ᾧ ἔλεγον ὡς χρὴ ὑμᾶς εὐλαβεῖσθαι μὴ ὑπ᾽ ἐμοῦ ἐξαπατηθῆτε ὡς δεινοῦ ὄντος λέγειν. τὸ γὰρ μὴ αἰσchυνθῆναι ὅτι αὐτíκα ὑπ᾽ ἐμοῦ ἐξελεγχθήσονται ἔργῳ, ἐπειδὰν μηδ᾽ ὁπωστιοῦν φαíνωμαι δεινὸς λέγειν, τοῦτό μοι ἔδοξεν αὐτῶν ἀναισchυντότατον εἶναι, εἰ μὴ ἄρα δεινὸν καλοῦσιν οὗτοι λέγειν τὸν τἀληθῆ λέγοντα.`,
            translations: [
                { lang: "ES | Literaria", text: "No sé, atenienses, la impresión que habrán sentido...", author: "J. Calonge" },
                { lang: "English", text: "How you have been affected by my accusers, I do not know...", author: "H.N. Fowler" },
                { lang: "Français", text: "Quelle impression mes accusateurs ont faite sur vous, Athéniens...", author: "M. Croiset" }
            ]
        }]
    },
    {
        author: "Marcus Aurelius",
        works: [{
            title: "Τὰ εἰς ἑαυτόν", title_es: "Meditaciones", title_en: "Meditations", title_fr: "Pensées",
            meta: "Libro II (Carnunto - Íntegro)",
            content: `Ἕωθεν προλέγειν ἑαυτῷ· συντεύξομαι περιέργῳ, ἀχαρíστῳ, ὑβριστῇ, δολερῷ, βασκάνῳ, ἀκοινωνήτῳ· πάντα ταῦτα συμβέβηκεν ἐκεíνοις παρὰ τὴν ἄgνοιαν τῶν ἀγαθῶν καὶ κακῶν. ἐγὼ δὲ τεθεωρηκὼς τὴν φύσιν τοῦ ἀγαθοῦ ὅτι καλόν, καὶ τοῦ κακού ὅτι αἰσchρόν, καὶ τὴν αὐτοῦ τοῦ ἁμαρτάνοντος φύσιν ὅτι μοι συγγενής, οὐχὶ αíματος ἢ σπέρματος τοῦ αὐτοῦ, ἀλλὰ νοῦ καὶ θεíας ἀπομοíρας μέτοχος, οὔτε βλαβῆναι ὑπό τινος αὐτῶν δύναμαι· αἰσchρῷ γάρ με οὐδεὶς περιβαλεῖ· οὔτε ὀργíζεσθαι τῷ συγγενεῖ δύναμαι οὔτε ἀπέchθεσθαι αὐτῷ. γεγόναμεν γὰρ πρὸς συνεργíαν ὡς πόδες, ὡς chεῖρες, ὡς βλέφαρα, ὡς οἱ στοῖχοι τῶν άνω καὶ κάτω ὀδόντων. τὸ οὖν ἀντιπράσσειν ἀλλήλοις παρὰ φύσιν· ἀντιπρακτικὸν δὲ τὸ ἀγανακτεῖν καὶ ἀποστρέφεσθαι.`,
            translations: [
                { lang: "ES | Literaria", text: "Al amanecer, dite a ti mismo: hoy me encontraré con un indiscreto...", author: "Bach" },
                { lang: "English", text: "Begin the morning by saying to thyself, I shall meet with the busybody...", author: "G. Long" },
                { lang: "Français", text: "Dès l'aurore, dis-toi par avance : Je vais rencontrer un indiscret...", author: "A. Couat" }
            ]
        }]
    }
];
