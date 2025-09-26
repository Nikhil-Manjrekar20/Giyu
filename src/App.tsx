@@ .. @@
 import AddOns from './components/AddOns';
 import BookingSuccess from './components/BookingSuccess';
 import NotFound from './components/NotFound';
+import FloatingActionButtons from './components/FloatingActionButtons';
 
 // Lazy load non-critical components
@@ .. @@
           <Route
             path="/"
             element={
               <>
                 <Header />
                 <main>
                   <Hero />
                   <VenueSpaces />
                   <Venue />
                   <Gallery />
                 </main>
                 <Footer />
+                <FloatingActionButtons />
               </>
             }
           />