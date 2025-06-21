
# 🧑‍💻 Guía de Trabajo en Equipo con Git

## ✅ Roles del equipo



## 📦 Estructura del repositorio

- Rama principal: `main` (estable, sin errores).
- Ramas de trabajo:
  - `ferchoMendoza`
  - `josuePalacios`
  - `joseItas`
  - `davidNavia`
  - `hanselAlcivar`
  - `cesarIntriago`
  - `josselinMailyn`

---

## 🔐 Reglas generales

1. **Cada miembro solo trabaja en su propia rama.**
   - ❌ No edites, hagas push ni borres contenido de otras ramas.
   - ✅ Usa tu rama como un espacio privado de desarrollo.

2. **No hacer `merge` a `main` sin revisión.**
   - Solo el encargado del repositorio realiza fusiones (`merge`) después de revisar el código.

3. **Siempre actualiza tu rama antes de trabajar.**
   git checkout tuRama
   git pull origin tuRama

4. **Haz commits claros y específicos.**
  
   git commit -m "Agrega formulario de contacto"

5. **Haz push con frecuencia, pero revisa antes.**
  
   git add .
   git commit -m "Tu mensaje claro"
   git push origin tuRama

6. **No borres ramas sin autorización.**

---

## 🔄 Flujo de trabajo recomendado


# Siempre trabaja en tu rama
git checkout nombreDeTuRama

# Traer últimos cambios (por si el encargado fusionó actualizaciones)
git pull origin nombreDeTuRama

# Realizar cambios y subirlos
git add .
git commit -m "Tu mensaje claro"
git push origin nombreDeTuRama
```

---
