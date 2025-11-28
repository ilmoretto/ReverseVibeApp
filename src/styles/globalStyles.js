import { StyleSheet } from 'react-native';
import { colors } from './colors';

// Estilos globais reutilizáveis
export const globalStyles = StyleSheet.create({
  // === CONTAINERS ===
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  
  containerCentered: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  
  // === CARDS ===
  card: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 3,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  
  // === BOTÕES ===
  buttonPrimary: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
  },
  
  buttonSecondary: {
    backgroundColor: colors.navy,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
  },
  
  buttonOutline: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  
  buttonSmall: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 36,
    minWidth: 36,
  },
  
  buttonDanger: {
    backgroundColor: colors.error,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 36,
    minWidth: 36,
  },
  
  buttonWarning: {
    backgroundColor: colors.warning,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 36,
    minWidth: 36,
  },
  
  buttonSuccess: {
    backgroundColor: colors.success,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 36,
    minWidth: 36,
  },
  
  // === TEXTOS ===
  titleLarge: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 6,
  },
  
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: 4,
  },
  
  body: {
    fontSize: 16,
    color: colors.textPrimary,
    lineHeight: 22,
  },
  
  caption: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  
  small: {
    fontSize: 12,
    color: colors.textMuted,
    lineHeight: 16,
  },
  
  textWhite: {
    color: colors.textWhite,
    fontWeight: 'bold',
  },
  
  textPrimary: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  
  textNavy: {
    color: colors.navy,
    fontWeight: 'bold',
  },
  
  textAccent: {
    color: colors.accent,
    fontWeight: 'bold',
  },
  
  textCenter: {
    textAlign: 'center',
  },
  
  textBold: {
    fontWeight: 'bold',
  },
  
  // === INPUTS ===
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: colors.background,
    color: colors.textPrimary,
    minHeight: 44,
  },
  
  inputFocused: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  
  inputError: {
    borderColor: colors.error,
    borderWidth: 2,
  },
  
  // === LISTAS ===
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
    backgroundColor: colors.background,
    minHeight: 56,
  },
  
  listItemContent: {
    flex: 1,
    paddingHorizontal: 12,
  },
  
  // === MODAIS ===
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.overlay,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  
  modalContent: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 20,
    margin: 20,
    minWidth: 280,
    maxWidth: '90%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.25)',
    elevation: 8,
  },
  
  // === UTILITÁRIOS ===
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  column: {
    flexDirection: 'column',
  },
  
  spaceBetween: {
    justifyContent: 'space-between',
  },
  
  spaceAround: {
    justifyContent: 'space-around',
  },
  
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  flex1: {
    flex: 1,
  },
  
  // === ESPAÇAMENTOS ===
  mt1: { marginTop: 8 },
  mt2: { marginTop: 16 },
  mt3: { marginTop: 24 },
  mb1: { marginBottom: 8 },
  mb2: { marginBottom: 16 },
  mb3: { marginBottom: 24 },
  ml1: { marginLeft: 8 },
  ml2: { marginLeft: 16 },
  mr1: { marginRight: 8 },
  mr2: { marginRight: 16 },
  
  pt1: { paddingTop: 8 },
  pt2: { paddingTop: 16 },
  pb1: { paddingBottom: 8 },
  pb2: { paddingBottom: 16 },
  pl1: { paddingLeft: 8 },
  pl2: { paddingLeft: 16 },
  pr1: { paddingRight: 8 },
  pr2: { paddingRight: 16 },
  
  // === BORDAS E SOMBRAS ===
  border: {
    borderWidth: 1,
    borderColor: colors.border,
  },
  
  borderRadius: {
    borderRadius: 8,
  },
  
  shadow: {
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  
  // === BACKGROUNDS ===
  bgPrimary: {
    backgroundColor: colors.primary,
  },
  
  bgSecondary: {
    backgroundColor: colors.navy,
  },
  
  bgSoft: {
    backgroundColor: colors.backgroundSoft,
  },
  
  bgDark: {
    backgroundColor: colors.backgroundDark,
  },
});